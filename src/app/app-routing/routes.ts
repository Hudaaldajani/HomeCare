import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { MaintenanceserviceComponent } from '../maintenanceservice/maintenanceservice.component';
import { CleaningserviceComponent } from '../cleaningservice/cleaningservice.component';
import { ServicesComponent } from '../services/services.component';
import { JobdetailComponent } from '../jobdetail/jobdetail.component';

export const routes: Routes = [
    {path:'home',component: HomeComponent},
    {path:'aboutus',component: AboutComponent},
    {path:'services',component: ServicesComponent},
    {path:'jobdetail/:id',component: JobdetailComponent},
    {path:'contactus',component: ContactComponent},
    {path:'maintenanceService',component: MaintenanceserviceComponent},
    {path:'cleaningService',component: CleaningserviceComponent},
    {path: '', redirectTo:'/home', pathMatch: 'full'}

];