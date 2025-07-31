import { Component } from '@angular/core';
import { Recipes } from '../../interfaces/Recipes';
import { RecipeService } from '../../services/recipeService/recipe.service';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/userService/user.service';


@Component({
  selector: 'app-personal-area',
  imports: [RouterLink],
  templateUrl: './personalArea.component.html',
  styleUrl: './personalArea.component.css'
})
export class PersonalAreaComponent {
  recipecesArr: Array<Recipes> = new Array<Recipes>()
  url: string = ""
  constructor(private recipesSrv: RecipeService, private userSrv: UserService) {
  }
  ngOnInit() {
    this.userSrv.getFavoriteRecipesIdByUserId(this.userSrv.connectUser._id).subscribe((x: any) => {
      for (let favorateId of x) {
        this.recipesSrv.getRecipeById(favorateId).subscribe((fr) =>{
           if(fr!=null){
            this.recipecesArr.push(fr)
          }})
    
        
      }

    }
    )
    this.url = this.recipesSrv.imgUrl
    this.recipesSrv.isFavoratePage=true
  }
}