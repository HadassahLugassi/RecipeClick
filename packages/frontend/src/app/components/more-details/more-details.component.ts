import { Component } from '@angular/core';
import { Recipes } from '../../interfaces/Recipes.js';
import { RecipeService } from '../../services/recipeService/recipe.service.js';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/userService/user.service.js';

@Component({
  selector: 'app-more-details',
  imports: [RouterModule],
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.css'
})
export class MoreDetailsComponent {
  recipeId: string = ""
  recipe: Recipes = {
    _id: "",
    name: "",
    img: "",
    level: "",
    time: 0,
    type: "",
    user_id: "",
    prepering: "",
    components: []
  }
  userIdAndRecipeId: any = {
    userId: "",
    recipeId: ""
  }
  url: string = ""
  constructor(private recipesSrv: RecipeService, private active: ActivatedRoute, private userSrv: UserService, private router: Router) {
  }
  ngOnInit() {
    this.active.params.subscribe((id: any) => this.recipeId = id.recipeId)
    this.recipesSrv.getRecipeById(this.recipeId).subscribe((x: any) => this.recipe = x)
    this.url = this.recipesSrv.imgUrl
    this.recipesSrv.wantToAddFavorateRecipe = false
    this.userSrv.wantToDelet=false
    this.recipesSrv.isUpdateRecipe=false
  }
  addfavoriteRecipe() {
    this.userIdAndRecipeId.userId = this.userSrv.connectUser._id
    if (this.userSrv.isThereUser == false) {
      alert("יש להתחבר כדי להוסיף את המתכון לרשימת המתכונים האהובים")
      this.recipesSrv.recipeId = this.recipeId
      this.recipesSrv.wantToAddFavorateRecipe = true
      this.router.navigate(['/login']);
      return
    }
    this.userIdAndRecipeId.recipeId = this.recipeId
    this.userSrv.addfavoriteRecipesId(this.userIdAndRecipeId).subscribe((x: any) => {
      alert(`${this.recipe.name} נוסף בהצלחה לרשימת המתכונים האהובים שלך`)
    })
  }

  deleteRecipe() {
    if(this.userSrv.isThereUser==false){
      alert("כדי למחוק מתכון יש צורך להתחבר")
      this.userSrv.wantToDelet=true
      this.recipesSrv.recipeId = this.recipeId
      this.router.navigate(['/login']);
      return
    }
    console.log (this.userSrv.connectUser._id +""+ this.recipe.user_id);
   
    if(this.userSrv.connectUser.isManager==false && this.userSrv.connectUser._id!=this.recipe.user_id){
      alert("אין לך הרשאה למחוק את המתכון")
      return
    }

    this.recipesSrv.deleteRecipe(this.userSrv.connectUser._id, this.recipeId).subscribe((x: any) => {
      alert("המתכון נמחק בהצלחה")
      this.router.navigate(['/home']);
    })
  }

  goBack() {
    if (this.recipesSrv.isFavoratePage == false) {
      this.router.navigate(['/home']);
    }
    else {
      this.router.navigate(['/personalArea']);
    }

  }
  updateRecipe(){
    this.recipesSrv.isUpdateRecipe=true
    this.recipesSrv.updateRecipeId=this.recipeId
    this.router.navigate(['/addRecipe']);

  }
}
