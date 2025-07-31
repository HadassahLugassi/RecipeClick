import { Component } from '@angular/core';
import { Recipes } from '../../interfaces/Recipes';
import { RecipeService } from '../../services/recipeService/recipe.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
recipecesArr:Array<any>=new Array<Recipes>()
url:string=""
constructor(private recipesSrv:RecipeService) {  
}
ngOnInit(){
  this.recipesSrv.getAllRecipes().subscribe((x:any)=>this.recipecesArr=x)
  this.url=this.recipesSrv.imgUrl
  this.recipesSrv.isFavoratePage=false
}
}