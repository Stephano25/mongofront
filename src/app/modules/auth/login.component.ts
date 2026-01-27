import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    this.auth.login(this.email, this.password).subscribe(res => {
      localStorage.setItem('token', res.access_token);

      // ✅ après login → redirection directe vers la liste des boards
      this.router.navigate(['/boards']);
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
