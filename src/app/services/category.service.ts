import { Injectable } from '@angular/core';
import { Category } from '../shared/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: AngularFireList<Category>;
  categoryDetails: AngularFireObject<Category>;

  constructor(private http: HttpClient,
    private angularFireDatabase: AngularFireDatabase) { }

  getCategoriesFireList(): AngularFireList<Category>{
    this.categories = this.angularFireDatabase.list('/categories') as AngularFireList<Category>;
    return this.categories;
  }
  
  getById(key: string): AngularFireObject<Category> {
    this.categoryDetails = this.angularFireDatabase.object('/categories/' + key) as AngularFireObject<Category>;
    return this.categoryDetails;
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(baseURL + 'categories/' + id);
  }

  getCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(baseURL + 'categories');
  }
}
