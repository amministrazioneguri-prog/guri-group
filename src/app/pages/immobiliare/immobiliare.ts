import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FirebaseService } from '../../services/firebase-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-immobiliare',
  imports: [CommonModule, RouterModule, TranslateModule, AsyncPipe],
  templateUrl: './immobiliare.html',
  styleUrls: ['./immobiliare.scss'],
})
export class Immobiliare {
  houses$!: Observable<any[]>;

  stats: any[] = [];
  services: any[] = [];
  portfolio: any[] = [];
  values: any[] = [];

  constructor(
    private translate: TranslateService,
    private fb: FirebaseService,
  ) {
    const lang = localStorage.getItem('lang') || 'it';
    this.translate.use(lang);

    // dati statici tradotti
    this.translate.get('IMMOBILIARE').subscribe((res: any) => {
      this.stats = res.STATS || [];
      this.services = res.SERVICES_LIST || [];
      this.portfolio = res.PORTFOLIO_LIST || [];
      this.values = res.VALUES_LIST || [];
    });
  }

  ngOnInit() {
    this.houses$ = this.fb.getHouses();
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    document
      .querySelectorAll('section, .servizio-card, .portfolio-card')
      .forEach((el) => observer.observe(el));
  }
}
