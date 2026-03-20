// app.config.ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, provideTranslateService } from '@ngx-translate/core';
import {
  TranslateHttpLoader,
  TRANSLATE_HTTP_LOADER_CONFIG,
  provideTranslateHttpLoader,
} from '@ngx-translate/http-loader';
import { routes } from './app.routes';

import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({ prefix: './i18n/', suffix: '.json' }),
      fallbackLang: 'it',
      lang: 'it',
    }),
    // Firebase INIT
    provideFirebaseApp(() => initializeApp(environment.firebase)),

    // Firestore
    provideFirestore(() => getFirestore()),

    // Storage
    provideStorage(() => getStorage()),
  ],
};
