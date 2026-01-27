import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // ✅ adapte selon ton backend NestJS

  constructor(private http: HttpClient, private router: Router) {}

  // 🔹 Login
  login(email: string, password: string): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(`${this.apiUrl}/login`, { email, password });
  }

  // 🔹 Register
  register(email: string, password: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/register`, { email, password });
  }

  // 🔹 Logout
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']); // ✅ retour vers login
  }

  // 🔹 Refresh token
  refreshToken(): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(`${this.apiUrl}/refresh`, {});
  }

  // 🔹 Vérifier si connecté
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
