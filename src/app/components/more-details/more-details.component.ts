import { Component } from '@angular/core';
import { Recipes } from '../../interfaces/Recipes.js';
import { RecipeService } from '../../services/recipeService/recipe.service.js';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/userService/user.service.js';

@Component({
  selector: 'app-more-details',
  imports: [],
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.css'
})
export class MoreDetailsComponent {
  recipeId: string = ""
  recipe:Recipes={
    _id:"",
    name:"",
    img:"",
    level:"",
    time:0,
    type:"",
    user_id:"",
    components:[]
  }
  userIdAndRecipeId:any={
    userId:"",
    recipeId:""
  }
  url:string=""
  constructor(private recipesSrv: RecipeService, private active: ActivatedRoute, private userSrv:UserService) {
  }
  ngOnInit() {
    this.active.params.subscribe((id: any) => this.recipeId = id.recipeId)
    this.recipesSrv.getRecipeById(this.recipeId).subscribe((x: any) => this.recipe = x)
    this.url=this.recipesSrv.imgUrl
  }
  addfavoriteRecipe(){
   this.userIdAndRecipeId.userId=this.userSrv.connectUser._id
   if(this.userSrv.isThereUser==false){
    alert("יש להתחבר כדי להוסיף את המתכון לרשימת המתכונים האהובים")
    return
   }
   this.userIdAndRecipeId.recipeId=this.recipeId
   this.userSrv.addfavoriteRecipesId(this.userIdAndRecipeId).subscribe((x:any)=>{
    alert(`${this.recipe.name} נוסף בהצלחה לרשימת המתכונים האהובים שלך`)
   })
  }

  deleteRecipe(){
     this.recipesSrv.deleteRecipe(this.userSrv.connectUser._id,this.recipeId).subscribe((x:any)=>console.log(x))
  }

  goBack(){
    if(this.recipesSrv.isFavoratePage==false){

    }
    else{

    }

  }
}
