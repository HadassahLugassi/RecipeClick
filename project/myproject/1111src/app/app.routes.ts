import { Routes } from '@angular/router';
import { Component } from '../../node_modules/@angular/core/index';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PersonalAreaComponent } from './components/personal-area/personal-area.component';

export const routes: Routes = [

    {path:"home", component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"personalArea",component:PersonalAreaComponent},
    {path:"**",component:LoginComponent}
];
