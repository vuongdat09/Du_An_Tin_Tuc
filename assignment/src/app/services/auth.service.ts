import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api'; // Đường dẫn đến API backend

  constructor(private http: HttpClient) {}

  signin(auth: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, auth);
  }
  signup(auth: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, auth);
  }

  saveToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  getAccessToken(): string {
    return localStorage.getItem('accessToken') || ''; // Lấy accessToken từ localStorage
  }
}
