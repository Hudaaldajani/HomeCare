import { Component, OnInit, Inject } from '@angular/core';
import { Job } from "../shared/job";
import { Category } from "../shared/category";
import { JobService } from '../services/job.service';
import { CategoryService } from '../services/category.service';
import { MaintenanceserviceComponent } from '../maintenanceservice/maintenanceservice.component';
import { CleaningserviceComponent } from '../cleaningservice/cleaningservice.component';
import { baseURL } from "../shared/baseurl";
import { ActivatedRoute } from '@angular/router';
import { flyInOut , expand} from '../animations/app.animation';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class ServicesComponent implements OnInit {

  job: Job;
 // category:Category;
  categories: Category[];
  category:Category;
  errMess: string;

  constructor(private CategoryService : CategoryService,
    private route: ActivatedRoute,
    @Inject('BaseURL') public baseURL) { }

  ngOnInit(){
    this.CategoryService.getCategories()
    .subscribe((categories)=>this.categories = categories,
    errmess => this.errMess =<any>errmess);
  }

}
