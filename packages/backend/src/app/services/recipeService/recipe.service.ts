import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipes } from '../../interfaces/Recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url:string="http://localhost:3000/recipes/"
  imgUrl:string="http://localhost:3000/"
  isFavoratePage:boolean=false
  getAllRecipes():Observable<Array<Recipes>>{
    return this.Http.get<Array<Recipes>>(`${this.url}getAllRecipes`)
  }
  getRecipeById(id:any):Observable<Recipes>{
    return this.Http.get<Recipes>(`${this.url}getRecipeById/${id}`)
  }
  addRecipe(recipe:Recipes):Observable<boolean>{
    return this.Http.post<boolean>(`${this.url}addRecipe`,recipe)
  }
  updateRecipe(id:any,recipe:Recipes):Observable<boolean>{
    return this.Http.put<boolean>(`${this.url}updateRecipe/${id}`,recipe)
  }
  // deleteRecipe(userIdAndRecipeId:any):Observable<ArrayBuffer>{
  //   return this.Http.delete(`${this.Http}deleteRecipe`,userIdAndRecipeId)
  // }
  //  deleteRecipe(userIdAndRecipeId:any):Observable<ArrayBuffer>{
  //   return this.Http.delete(`${this.Http}deleteRecipe`,userIdAndRecipeId)
  // }



  deleteRecipe(userId: string, recipeId: string): Observable<any> {
    const body = { userId, recipeId };
    return this.Http.delete<any>(`${this.url}deleteRecipe`, { body });
  }
  

  constructor(private Http:HttpClient) {
  
   }
}
