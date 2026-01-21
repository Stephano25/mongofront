import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class ApiService {
    private api = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    get<T>(url: string) {
        return this.http.get<T>(`${this.api}${url}`);
    }
}