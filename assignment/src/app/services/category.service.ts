import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  API: string = 'http://localhost:8080/api/categories';
  constructor(private http: HttpClient) {}
  getCategories(): Observable<any> {
    return this.http.get<any[]>(`${this.API}`);
  }
  getCategory(id: string): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`);
  }
  removeCategory(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`);
  }
  createCategory(category: any): Observable<any> {
    return this.http.post(`${this.API}`, category);
  }
  updateCategory(id: string, category: any): Observable<any> {
    return this.http.put(`${this.API}/${id}`, category);
  }
}
