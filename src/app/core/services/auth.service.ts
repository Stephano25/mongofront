import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  register(email: string, password: string) {
    return this.http.post(`${this.api}/register`, { email, password });
  }

  login(email: string, password: string) {
    return this.http.post<{ access_token: string }>(`${this.api}/login`, { email, password });
  }
}
