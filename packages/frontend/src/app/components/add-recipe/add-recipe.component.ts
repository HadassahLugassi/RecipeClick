import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipeService/recipe.service.js';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/userService/user.service.js';
import { Router, RouterModule } from '@angular/router';
import { Recipes } from '../../interfaces/Recipes.js';

@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule, RouterModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {

  recipe: any = {
    name: "",
    img: "",
    level: "",
    time: 0,
    type: "",
    user_id: "",
    prepering: "",
    components: [{ name: "", quantity: 0 }]
  }
  recipesLength: number = 1

  recipe2: Recipes = {
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
  isUpdateRecipe:boolean=false

  constructor(private recipeSrv: RecipeService, private userSrv: UserService, private router: Router) {
  }
  ngOnInit(){
    this.isUpdateRecipe= this.recipeSrv.isUpdateRecipe
    this.recipeSrv.getRecipeById(this.recipeSrv.updateRecipeId).subscribe((x: any) => this.recipe2 = x)

  }


  addRecipe() {
    this.recipe.user_id = this.userSrv.connectUser._id
    if (this.recipe.name === "" || this.recipe.img === "" || this.recipe.level === "" || this.recipe.time === 0 || this.recipe.type === "" || this.recipe.user_id === "" || this.recipe.prepering === "") {
      alert("כדי להוסיף מתכון יש למלאות את כל השדות")
      return
    }
    for (let c of this.recipe.components) {
      if (c.quantity === 0 || c.name === "") {
        alert("כדי להוסיף מתכון יש למלאות את כל השדות")
        return
      }
    }
    console.log(this.recipe.components);
    this.recipeSrv.addRecipe(this.recipe).subscribe((res: any) => {
      alert(`המתכון ${this.recipe.name} נוסף בהצלחה!`)
      this.router.navigate(['/home']);
    })
  }
  addComponent() {
    this.recipe.components.push({ name: "", quantity: 0 })
  }
  updateRecipe(){
    if (this.recipe2.name === "" || this.recipe2.img === "" || this.recipe2.level === "" || this.recipe2.time === 0 || this.recipe2.type === "" || this.recipe2.user_id === "" || this.recipe2.prepering === "") {
      alert("כדי לעדכן את המתכון יש למלאות את כל השדות")
      return
    }
    for (let c of this.recipe2.components) {
      if (c.quantity === 0 || c.name === "") {
        alert("כדי לעדכן את המתכוןיש למלאות את כל השדות")
        return
      }
    }
    this.recipeSrv.updateRecipe(this.recipe2._id,this.recipe2).subscribe((x:any)=>{
      alert("המתכון עודכן בהצלחה")
      this.router.navigate(['/home']);

    })
   
  }
}
