import { Component, signal, inject } from '@angular/core';
import { Router, RouterOutlet, Scroll } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Navbar } from './layout/navbar/navbar';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Footer, Navbar, CommonModule, TranslateModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('gurigroup');

  private translate = inject(TranslateService);

  constructor(private router: Router) {
    // Scroll personalizzato
    this.router.events
      .pipe(filter((e) => e instanceof Scroll))
      .subscribe((e: any) => {
        if (e.position) {
          // scroll indietro avanti
          window.scrollTo({ top: e.position[1], left: e.position[0], behavior: 'smooth' });
        } else if (e.anchor) {
          // scroll verso ancore
          const el = document.getElementById(e.anchor);
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // scroll in cima pagina
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });

    // // Configurazione lingue
    // this.translate.addLangs(['it', 'en', 'de']);
    // this.translate.setDefaultLang('it');

    // // Legge lingua salvata da localStorage oppure imposta italiana
    // const savedLang = localStorage.getItem('lang');
    // if (savedLang && ['it', 'en', 'de'].includes(savedLang)) {
    //   this.translate.use(savedLang);
    // } else {
    //   this.translate.use('it');
    // }
  }

  // // Metodo globale per cambiare lingua
  // changeLang(lang: string) {
  //   this.translate.use(lang);
  //   localStorage.setItem('lang', lang);
  // }
}