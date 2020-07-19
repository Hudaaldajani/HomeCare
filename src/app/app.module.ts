import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatListModule } from '@angular/material/list'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from  "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import 'hammerjs';
import { JobdetailComponent } from './jobdetail/jobdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import {AgmCoreModule} from '@agm/core';

import { JobService } from './services/job.service';
import { LeaderService } from './services/leader.service';
import { RequestService } from './services/request.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { baseURL } from './shared/baseurl';

import { MaintenanceserviceComponent } from './maintenanceservice/maintenanceservice.component';
import { CleaningserviceComponent } from './cleaningservice/cleaningservice.component';
import { ServicesComponent } from './services/services.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from 'src/environments/environment';

import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    JobdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MaintenanceserviceComponent,
    CleaningserviceComponent,
    ServicesComponent,
  ],
  imports: [
    ToastrModule.forRoot(),
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule ,
    MatIconModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOHoA1ayxMgxfNteqJGKlmF15-IohDpnA'
    })
  ],
  providers: [
    JobService,
    LeaderService,
    RequestService, 
    ProcessHTTPMsgService,
    {provide:'BaseURL',useValue:baseURL},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
