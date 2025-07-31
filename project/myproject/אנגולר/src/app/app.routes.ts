import { Routes } from '@angular/router';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AllcityComponent } from './components/allcity/allcity.component';
import { AllusersComponent } from './components/allusers/allusers.component';

export const routes: Routes = [
    {path:'myusers',component:AllusersComponent},
    {path:'addu',component:AdduserComponent},
    {path:'allcity',component:AllcityComponent},

   
];

