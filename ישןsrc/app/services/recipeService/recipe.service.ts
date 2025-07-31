import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipes } from '../../interfaces/Recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url:string="http://localhost:3000/recipes/"
  getAllRecipes():Observable<Array<Recipes>>{
    return this.Http.get<Array<Recipes>>(`${this.url}getAllRecipes`)
  }
  getRecipeById():Observable<Recipes>{
    return this.Http.get<Recipes>(`${this.url}getRecipeById/:id`)
  }
  addRecipe(recipe:Recipes):Observable<boolean>{
    return this.Http.post<boolean>(`${this.url}/addRecipe`,recipe)
  }
  updateRecipe(recipe:Recipes):Observable<boolean>{
    return this.Http.put<boolean>(`${this.url}updateRecipe/:id`,recipe)
  }
  // deleteRecipe():
  constructor(private Http:HttpClient) {
  
   }
}
