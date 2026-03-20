import { Component } from '@angular/core';
import { Adminauth } from '../../services/adminauth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-admin.html',
  styleUrl: './login-admin.scss',
})
export class LoginAdmin {
  password = '';
  error = '';

  constructor(
    private auth: Adminauth,
    private router: Router,
  ) {}

  login() {
    const success = this.auth.login(this.password);

    if (success) {
      this.router.navigate(['/admin']);
    } else {
      this.error = 'Password errata';
    }
  }
}
