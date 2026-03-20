import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Adminauth } from './services/adminauth';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Adminauth);
  const router = inject(Router);

  if (auth.isLogged()) {
    return true;
  }

  router.navigate(['/login-admin']);
  return false;
};