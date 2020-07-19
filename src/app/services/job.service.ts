import { Injectable } from '@angular/core';
import { Job } from '../shared/job';
import { JobParagraph } from '../shared/jobParagraph';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  job: AngularFireObject<Job>;
  jobs: AngularFireList<Job>;
  jobParagraphs: AngularFireList<JobParagraph>;

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService,
    private angularFireDatabase: AngularFireDatabase) { }

    getJobsFireList(): AngularFireList<Job>{
      this.jobs = this.angularFireDatabase.list('/jobs') as AngularFireList<Job>;
      return this.jobs;
    }

    getById(key: string): AngularFireObject<Job> {
      this.job = this.angularFireDatabase.object('/jobs/' + key) as AngularFireObject<Job>;
     // this.getJobParagraphsFireList();
      return this.job;
    }

    // getJobParagraphsFireList(): AngularFireList<JobParagraph>{
    //   this.jobParagraphs = this.angularFireDatabase.list('/jobs/paragraphs') as AngularFireList<JobParagraph>;
    //   return this.jobParagraphs;
    // }


  getJob(id: string): Observable<Job> {
    return this.http.get<Job>(baseURL + 'jobs/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getJobs() : Observable<Job[]> {
    return this.http.get<Job[]>(baseURL + 'jobs')
    .pipe(catchError(this.processHTTPMsgService.handleError));;
  }

}
