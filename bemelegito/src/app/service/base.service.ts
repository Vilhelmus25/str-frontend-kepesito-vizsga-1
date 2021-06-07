import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  public entity: string = '';
  public apiUrl: string = 'https://api.github.com';

  constructor(public http: HttpClient) { }

  getAll(page: number): Observable<T[]> {
    return this.http.get<T[]>(
      `${this.apiUrl}${this.entity}&page=${page}`
    );
  }
}
