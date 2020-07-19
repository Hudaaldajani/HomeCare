import { Component, OnInit, Inject } from '@angular/core';
import { Job } from "../shared/job";
import { Category } from "../shared/category";
import { CategoryService } from '../services/category.service';
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
  breakpoint: number;
  br: boolean;
 // category:Category;
 // categories: Category[];
  //category:Category;
  errMess: string;
  

  categories:Category[] = [];
 //image:any[] = [];

  constructor(private categoryService : CategoryService,
    private route: ActivatedRoute,
    @Inject('BaseURL') public baseURL) { }

  ngOnInit(){

    this.categoryService.getCategoriesFireList().snapshotChanges().subscribe(res => {
      this.categories.length = 0;
      res.forEach(c => {
        const category = c.payload.toJSON();
        category['$key'] = c.key;
        this.categories.push(category as Category);
      });
      console.log('fetched successfully');
    }, err => {
      debugger;
      console.log('An error occurred');
    });


    // this.categoryService.getCategoriesFirestore().subscribe(data => {

    //   this.categoriesF = data.query.get(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       isedit: false,
    //       category: e.payload.doc.data()['category'],
    //       categoryname: e.payload.doc.data()['categoryname'],
    //       categoryimage: e.payload.doc.data()['categoryimage'],
    //       categoryparagraph: e.payload.doc.data()['categoryparagraph'],
    //     }
    //   })
    //   console.log(this.categoriesF);
    // });


    // this.categoryService.getCategoriesFirestore()
    // .subscribe(d =>this.categories = d.map(e =>{
    //   return {
    //     ...e.payload.doc.data() as Category
    //   }; 
    // }))
    // this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
    // this.br = true;
  }


  // onResize(event) {
  //   this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
    // this.br = false;
  // }
 


    // this.CategoryService.getCategories()
    // .subscribe((categories)=>this.categories = categories,
    // errmess => this.errMess =<any>errmess);

}
