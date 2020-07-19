import { Injectable } from '@angular/core';
import { Request } from '../shared/request';
import { Observable} from 'rxjs';
import {catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {formatDate} from '@angular/common';
import {database} from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class RequestService {


  requests: AngularFireList<Request>;


  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService,
    private angularFireDatabase: AngularFireDatabase) { }


    createRequest(request: Request): database.ThenableReference {
      const now = formatDate(new Date(), 'HH:mm:ss dd/MM/yyyy', 'en-US');
      const requestObj = {
        firstname: request.firstname,
        lastname: request.lastname,
        telnum: request.telnum,
        email: request.email,
        requestedservicename:request.requestedservicename
      };
  
      if (this.requests == null) {
        return this.angularFireDatabase.database.ref('/requests').push(requestObj);
      } else {
        return this.requests.push(requestObj);
      }
    }
  

  submitRequest(request: Request[]): Observable<Request>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Request>(baseURL + 'request/' , request[0], httpOptions)
    .pipe(catchError(this.processHTTPMsgService.handleError));
    }
  }
