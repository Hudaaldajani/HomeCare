import { Component, OnInit , Inject, VERSION} from '@angular/core';
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
  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  breakpoint: number;
  br: boolean;
  jobs : Job[] = [];
  errMess: string;

  constructor(private jobService : JobService,
    @Inject('BaseURL') public baseURL) { }

  ngOnInit(){

    this.jobService.getJobsFireList().snapshotChanges().subscribe(res => {
      this.jobs.length = 0;
      res.forEach(j => {
        const job = j.payload.toJSON();
        job['$key'] = j.key;
        this.jobs.push(job as Job);
      });
      console.log('fetched successfully');
    }, err => {
      debugger;
      console.log('An error occurred');
    });


    this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;
    this.br = true;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
    this.br = false;
  }
}
