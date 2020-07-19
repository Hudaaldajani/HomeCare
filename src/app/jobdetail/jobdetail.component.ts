import { Component, OnInit, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Job } from '../shared/job';
import { JobService  } from '../services/job.service';
import { FormBuilder , FormGroup , Validators, FormControl } from "@angular/forms";
import { Request} from "../shared/request";
import { RequestService } from '../services/request.service';
import { switchMap } from 'rxjs/operators';
import { visibility, flyInOut , expand } from '../animations/app.animation';
import { ToastrService } from 'ngx-toastr';
import { JobParagraph } from '../shared/jobParagraph';
import { AngularFirestore } from "@angular/fire/firestore";



@Component({
  selector: 'app-jobdetail',
  templateUrl: './jobdetail.component.html',
  styleUrls: ['./jobdetail.component.scss'],
   host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      visibility(),
      expand()
    ]
})
export class JobdetailComponent implements OnInit {


    show:boolean = false;
    buttonName:any = 'Read More ...';

    job : Job; 
    paragraphs : JobParagraph[]= [];
    // jobIds: string[];
    // prev: string;
    // next: string;
    request: Request;
    requests: Request[] = [];
    requestForm: FormGroup;
    checkedBox: boolean = true;
    errMess: string;
    showSpinner:boolean =false;
    visibility = 'shown';



    formErrors = {
      'firstname': '',
      'lastname': '',
      'telnum': '',
      'email': '',
      'requestedservicename':''
    };
  
    validationMessages = {
      'firstname': {
        'required':      'First Name is required.',
        'minlength':     'First Name must be at least 2 characters long.',
        'maxlength':     'FirstName cannot be more than 25 characters long.'
      },
      'lastname': {
        'required':      'Last Name is required.',
        'minlength':     'Last Name must be at least 2 characters long.',
        'maxlength':     'Last Name cannot be more than 25 characters long.'
      },
      'telnum': {
        'required':      'Tel. number is required.',
        'pattern':       'Tel. number must contain only numbers.'
      },
      'email': {
        'required':      'Email is required.',
        'email':         'Email not in valid format.'
      },
    };




  constructor(private jobService: JobService,
    private requestService: RequestService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    //
    private firestore: AngularFirestore,
    //
    private toast: ToastrService,
    //
    @Inject('BaseURL') public baseURL) {

      this.createForm();
     }

  ngOnInit(): void {

     // this.route.snapshot.paramMap.get('id');
    // this.route.snapshot.params.id
    this.route.params.subscribe(params => {
      const id = params.id;

      if (id) {
        this.jobService.getById(id).snapshotChanges()
          .subscribe(res => {
            if ((res.payload.exists())) {
              console.log('fetched successfully');
              this.job = res.payload.toJSON() as Job;
              this.job['$key'] = res.key;
             // this.job.paragraphs = res.payload.toJSON() as JobParagraph[];
            } else {
              console.log('does not exist');
              //this.router.navigate(['/']);
            }
          }, err => {
            console.log(err.toString());
            debugger;
          });

      }

   
    });



    // const id = +this.route.snapshot.params['id'];
    // this.jobService.getJob(id.toString())
    //  .subscribe((job) => this.job = job,
    // errmess => this.errMess = <any>errmess);
}




toggle() {
  this.show = !this.show;

  // CHANGE THE NAME OF THE BUTTON.
  if(this.show)  
    this.buttonName = "...Read Less";
  else
    this.buttonName = "Read More ...";
}




objectValues(obj) {
  return Object.values(obj);
}

objectKeys(obj) {
  return Object.keys(obj);
}

  createForm(){
    this.requestForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required, Validators.pattern] ],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
      requestedservicename:new FormControl('')
    });

    this.requestForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onChange(event){
    this.checkedBox = !event.checked;
    this.requestForm.patchValue({requestedservicename: this.job.name});
  }

  onValueChanged(data?: any) {
    if (!this.requestForm) { return; }
    const form = this.requestForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }


  onSubmit() {
    let req = this.requestForm.value;
    //
    this.requestService.createRequest(req);
   // this.firestore.collection('request').add(req);
    //
    this.request = this.requestForm.value;
    //console.log(this.request);
      this.showSpinner = true;
     this.request = this.requestForm.value;
     // this.requests.push(this.request);
    //   this.requestService.submitRequest(this.requests)
    // .subscribe(requests => 
    //       {
             setTimeout(() => 
              {
                this.request = this.requestForm.value;
                // this.request = requests;
                  this.showSpinner = false;
                 // console.log(this.request);
                  setTimeout(() => {
                    this.request = null;
                    this.toast.success('We will contact you soon!','Submitted Successfully');
                  }, 200);
              }
            , 200);
         // }
       // );
    this.requestForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      requestedservicename:''
    });

   // requestedservicename:this.job.name

   //this.feedbackFormDirective.resetForm();
  }
// let  errMsg:string;
//   errMsg = `${'submitted'}


  goBack(): void {
    this.location.back();
  }


  //onSubmit() {
    // TODO: Use EventEmitter with form value
    //console.log?("ok")
//  }
  
}
