import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  @ViewChild('services') services!: ElementRef;

  constructor(private router: Router, private translate: TranslateService) {
    const lang = localStorage.getItem('lang') || 'it';
    this.translate.use(lang);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }




  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(
        '.hero-content, .service-card, .about-grid, .about-image, .property-card, .car-card, .cta'
      )
      .forEach((el) => observer.observe(el));
  }

  scrollToServices() {
    this.services.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}