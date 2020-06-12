import { Injectable } from '@angular/core';
import { Request } from '../shared/request';
import { Observable} from 'rxjs';
import {catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

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
