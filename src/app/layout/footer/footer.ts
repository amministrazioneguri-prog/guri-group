import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
footerServices = [
    'FOOTER.SERVICES_LIST.0',
    'FOOTER.SERVICES_LIST.1',
    'FOOTER.SERVICES_LIST.2'
  ];
  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang') || 'it';
    this.translate.use(lang); 
  }

}
