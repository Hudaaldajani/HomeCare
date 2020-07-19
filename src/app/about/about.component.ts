import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut , expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class AboutComponent implements OnInit {

 // leaders:Leader[];

  leaders:Leader[] = [];

  constructor(private leaderService: LeaderService,
    @Inject('BaseURL') public baseURL) { }

  ngOnInit() {

    this.leaderService.getLeadersFireList().snapshotChanges().subscribe(res => {
      this.leaders.length = 0;
      res.forEach(l => {
        const leader = l.payload.toJSON();
        leader['$key'] = l.key;
        this.leaders.push(leader as Leader);
      });
      console.log('fetched successfully');
    }, err => {
      debugger;
      console.log('An error occurred');
    });

    // this.leaderService.getLeaders()
    // .subscribe((leaders)=>this.leaders = leaders);
  }

}
