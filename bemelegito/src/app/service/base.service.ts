import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  public entity: string = '';
  public apiUrl: string = 'https://api.github.com';
  public $list: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  constructor(public http: HttpClient) { }

  getAll(page: number): Observable<T[]> {
    return this.http.get<T[]>(
      `${this.apiUrl}${this.entity}&page=${page}`
    ).pipe(
      tap((data: T[]) => this.$list.next(data))
    );
  }

  loadPage(page: number): void {
    this.http.get<T[]>(
      `${this.apiUrl}${this.entity}&page=${page}`
    ).subscribe(
      (data: T[]) => {
        this.$list.next([...this.$list.value, ...data]);
      }
    );
  }
}
