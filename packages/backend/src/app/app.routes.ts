import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component.js';
import { LoginComponent } from './components/login/login.component.js';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component.js';
import { RegisterComponent } from './components/register/register.component.js';
import { MoreDetailsComponent } from './components/more-details/more-details.component.js';
import { PersonalAreaComponent } from './components/personalArea/personalArea.component.js';


export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"addRecipe",component:AddRecipeComponent},
    {path:"register",component:RegisterComponent},
    {path:"moreDetails/:recipeId",component:MoreDetailsComponent},
    {path:"personalArea",component:PersonalAreaComponent},
    {path:"**",component:HomeComponent}
];
