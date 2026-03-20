import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Adminauth {
  private ADMIN_PASSWORD = 'Guri-19-20-20';

  constructor(private router: Router) {}

  login(password: string): boolean {
    if (password === this.ADMIN_PASSWORD) {
      localStorage.setItem('admin-auth', 'true');
      return true;
    }
    return false;
  }

  isLogged(): boolean {
    return localStorage.getItem('admin-auth') === 'true';
  }

  logout() {
    localStorage.removeItem('admin-auth');
    this.router.navigate(['/']);
  }
}
