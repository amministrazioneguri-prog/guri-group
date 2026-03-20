import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FirebaseService } from '../../services/firebase-service';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rent-auto',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, AsyncPipe],
  templateUrl: './rent-auto.html',
  styleUrl: './rent-auto.scss',
})
export class RentAuto implements OnInit {

  cars$!: Observable<any[]>;

  constructor(
    private translate: TranslateService,
    private fb: FirebaseService
  ) {
    const lang = localStorage.getItem('lang') || 'it';
    this.translate.use(lang);
  }

  ngOnInit() {
    this.cars$ = this.fb.getCars();
  }

  rentAutoServices = [
    {
      TITLE: 'RENT_AUTO.SERVICES_LIST.0.TITLE',
      DESC: 'RENT_AUTO.SERVICES_LIST.0.DESC',
      img: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg',
    },
    {
      TITLE: 'RENT_AUTO.SERVICES_LIST.1.TITLE',
      DESC: 'RENT_AUTO.SERVICES_LIST.1.DESC',
      img: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
    },
    {
      TITLE: 'RENT_AUTO.SERVICES_LIST.2.TITLE',
      DESC: 'RENT_AUTO.SERVICES_LIST.2.DESC',
      img: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg',
    },
  ];

  rentAutoPortfolio = [
    {
      TITLE: 'RENT_AUTO.PORTFOLIO_LIST.0.TITLE',
      DESC: 'RENT_AUTO.PORTFOLIO_LIST.0.DESC',
      img: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg',
    },
    {
      TITLE: 'RENT_AUTO.PORTFOLIO_LIST.1.TITLE',
      DESC: 'RENT_AUTO.PORTFOLIO_LIST.1.DESC',
      img: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg',
    },
    {
      TITLE: 'RENT_AUTO.PORTFOLIO_LIST.2.TITLE',
      DESC: 'RENT_AUTO.PORTFOLIO_LIST.2.DESC',
      img: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
    },
  ];
}