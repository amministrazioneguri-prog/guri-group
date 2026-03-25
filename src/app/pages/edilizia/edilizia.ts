import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edilizia',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './edilizia.html',
  styleUrl: './edilizia.scss',
})
export class Edilizia {
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

    document.querySelectorAll('.animate').forEach((el) => {
      observer.observe(el);
    });
  }
}
