import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Edilizia } from './pages/edilizia/edilizia';
import { Immobiliare } from './pages/immobiliare/immobiliare';
import { RentAuto } from './pages/rent-auto/rent-auto';
import { Contatti } from './pages/contatti/contatti';
import { Admin } from './pages/admin/admin';
import { authGuard } from './auth-guard';
import { LoginAdmin } from './components/login-admin/login-admin';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'chi-siamo',
    component: About,
  },
  {
    path: 'edilizia',
    component: Edilizia,
  },
  {
    path: 'immobiliare',
    component: Immobiliare,
  },
  {
    path: 'rent-auto',
    component: RentAuto,
  },
  {
    path: 'contatti',
    component: Contatti,
  },
  {
    path: 'login-admin',
    component: LoginAdmin,
  },
  {
    path: 'admin',
    component: Admin,
    canActivate: [authGuard],
  },
];
