import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Apiproduct {

  private http = inject(HttpClient);

  getallProducts(): Observable<any[]> {
    return this.http.get<any[]>('https://api.escuelajs.co/api/v1/products');
  }
}