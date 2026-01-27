import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Register</h2>
    <form (ngSubmit)="register()">
      <input [(ngModel)]="email" name="email" placeholder="Email" required />
      <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  `
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService) {}

  register() {
    this.auth.register(this.email, this.password).subscribe(() => {
      alert('User registered!');
    });
  }
}
