import { Component, HostListener, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateService, TranslatePipe, TranslateDirective, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, RouterOutlet, TranslateModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  private translate = inject(TranslateService);

  isScrolled = false;
  mobileMenuOpen = false;

  constructor() {
    // Configurazione lingue disponibili
    this.translate.addLangs(['it', 'en', 'de']);
    this.translate.setFallbackLang('it');
    this.translate.use('it'); // lingua iniziale
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : 'auto';
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang); // salva scelta globale
  }
}