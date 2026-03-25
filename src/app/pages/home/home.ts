import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
  @ViewChild('services') services!: ElementRef;

  private observer!: IntersectionObserver;

  constructor(private router: Router, private translate: TranslateService) {
    const lang = localStorage.getItem('lang') || 'it';
    this.translate.use(lang);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  ngAfterViewInit() {
    this.initObserver();
  }

  private initObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // opzionale: evita re-trigger continuo
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // elementi animati
    const elements = document.querySelectorAll(
      '.hero-content, .service-card, .about-grid, .about-image, .property-card, .car-card, .cta, .editoriale_1, .editoriale_2, .editoriale_3, .editoriale_title'
    );

    elements.forEach((el) => {
      el.classList.add('animate'); // stato iniziale
      this.observer.observe(el);
    });
  }

  scrollToServices() {
    this.services.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}