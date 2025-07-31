import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component.js';
import { LoginComponent } from './components/login/login.component.js';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component.js';
import { RegisterComponent } from './components/register/register.component.js';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"addRecipe",component:AddRecipeComponent},
    {path:"register",component:RegisterComponent},
    {path:"**",component:HomeComponent}
];
