import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.email, this.password).subscribe(() => {
      alert('User registered!');
      this.router.navigate(['/login']);
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
