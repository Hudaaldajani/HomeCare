import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  leaders: AngularFireList<Leader>;

  constructor(private http: HttpClient,
    private angularFireDatabase: AngularFireDatabase) { }

  getLeadersFireList(): AngularFireList<Leader>{
    this.leaders = this.angularFireDatabase.list('/leadership') as AngularFireList<Leader>;
    return this.leaders;
  }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leadership');
  }

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership/' + id);
  }

  // getFeaturedLeader(): Promise<Leader> {
  //   return Promise.resolve(LEADERS .filter((Leader) => Leader.featured)[0]);
  // }
}
