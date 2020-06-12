import { Injectable } from '@angular/core';
import { Job } from '../shared/job';
import { JOBS } from '../shared/jobs';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';




@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getJob(id: string): Observable<Job> {
    return this.http.get<Job>(baseURL + 'jobs/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getJobs() : Observable<Job[]> {
    return this.http.get<Job[]>(baseURL + 'jobs')
    .pipe(catchError(this.processHTTPMsgService.handleError));;
  }

}
