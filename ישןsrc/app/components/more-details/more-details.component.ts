import { Component } from '@angular/core';
import { Recipes } from '../../interfaces/Recipes.js';
import { RecipeService } from '../../services/recipeService/recipe.service.js';

@Component({
  selector: 'app-more-details',
  imports: [],
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.css'
})
export class MoreDetailsComponent {
recipecesArr:Array<any>=new Array<Recipes>()

constructor(private recipesSrv:RecipeService) {  
}
ngOnInit(){
  this.recipesSrv.getAllRecipes().subscribe((x:any)=>this.recipecesArr=x)
}
}
