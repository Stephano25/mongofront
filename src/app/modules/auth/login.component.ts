import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="login()">
        <input [(ngModel)]="email" name="email" placeholder="Email" required />
        <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
    </form>

    <p>
        Pas encore inscrit ?
        <button (click)="goToRegister()">Créer un compte</button>
    </p>
`

})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.email,  this.password).subscribe(res => {
      localStorage.setItem('token', res.access_token);
      alert('Logged in!');
    });
  }
  goToRegister() { this.router.navigate(['/register']); }
}
