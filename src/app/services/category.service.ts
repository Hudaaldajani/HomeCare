import { Injectable } from '@angular/core';
import { Category } from '../shared/category';
import { Categories } from '../shared/categories';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(baseURL + 'categories/' + id);
  }

  getCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(baseURL + 'categories');
  }
}
