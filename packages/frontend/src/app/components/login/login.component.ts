import { Component } from '@angular/core';
import { UserService } from '../../services/userService/user.service.js';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RecipeService } from '../../services/recipeService/recipe.service.js';


@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: any = {
    name: "",
    password: ""
  }
  constructor(private userSrv: UserService, private router: Router, private recipeSrv: RecipeService) {

  }

  checkUser() {
    if (this.user.name === "" || this.user.password === "") {
      alert("יש למלאות את כל השדות")
      return
    }
    try {
      this.userSrv.getUserByNameAndPass(this.user).subscribe((x: any) => {      
        this.userSrv.isThereUser = true
        this.userSrv.connectUser = x
        if (this.recipeSrv.wantToAddFavorateRecipe ||  this.userSrv.wantToDelet) {
          this.router.navigate(['/moreDetails', this.recipeSrv.recipeId]);
        }
        else {
          this.router.navigate(['/home']);
        }
      })
    }
    catch (e: any) {
      alert("שגיאת שרת פנה למנהל המערכת")


    }

  }
}
