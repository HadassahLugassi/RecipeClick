import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipeService/recipe.service.js';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/userService/user.service.js';

@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
 
 recipe:any={ 
  name:"",
  img:"",
  level:"",
  time:0,
  type:"",
  user_id:"",
  components:[{name:"כוסות קמח",quantity:2},{name:"כפיות כפה",quantity:3}]

 }
 recipesLength:number=1

constructor(private recipeSrv:RecipeService,private userSrv:UserService) {

  
}
addRecipe(){
  this.recipe.user_id=this.userSrv.connectUser._id
  this.recipeSrv.addRecipe(this.recipe).subscribe((res:any)=>{
alert(`המתכון ${this.recipe.name} נוסף בהצלחה!`)
  })
}
addComponent(){
  this.recipe.components.add({name:"d",quantity:0})
}
}
