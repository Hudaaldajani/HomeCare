import { Component, OnInit , Inject } from '@angular/core';
import { Job } from "../shared/job";
import { JobService } from '../services/job.service';
import { flyInOut , expand} from '../animations/app.animation';


@Component({
  selector: 'app-cleaningservice',
  templateUrl: './cleaningservice.component.html',
  styleUrls: ['./cleaningservice.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class CleaningserviceComponent implements OnInit {

  jobs : Job[];
  // selectedJob : Job;
  errMess: string;

  constructor(private jobsService : JobService,
    @Inject('BaseURL') public baseURL) { }

  ngOnInit(){
    this.jobsService.getJobs()
  .subscribe((jobs)=> this.jobs = jobs,
  errmess => this.errMess = <any>errmess);
  }

  // onSelect(job : Job){
  //   this.selectedJob = job;
  // }

  // goBack(): void {
  //   this.location.back();
  // }

}
