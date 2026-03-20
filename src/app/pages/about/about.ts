import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements AfterViewInit {

  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang') || 'it';
    this.translate.use(lang);
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
      { threshold: 0.2 },
    );

    document
      .querySelectorAll(
        '.intro-grid, .intro-image, .story-grid, .story-image, .values-header, .value-card, .about-cta',
      )
      .forEach((el) => observer.observe(el));
  }
}