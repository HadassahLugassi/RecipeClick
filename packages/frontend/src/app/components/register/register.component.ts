import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Users } from '../../interfaces/Users';
import { UserService } from '../../services/userService/user.service.js';
import { Recipes } from '../../interfaces/Recipes';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
user:any={
  name:"",
  password:"" ,
  address:"" ,
  phone:"",
  isManager:false ,
  favoriteRecipesId:[]
}
constructor(private userSrv:UserService,private router:Router){

}
addUser(){
  if(this.user.name=="" ||  this.user.password=="" || this.user.address=="" || this.user.phone=="" ){
    alert("כדי להרשם יש למלא את כל השדות")
  }
  this.userSrv.addUser(this.user).subscribe((user:any)=>{
    this.userSrv.isThereUser=true
    this.userSrv.getUserByNameAndPass({name:this.user.name,password:this.user.password}).subscribe((user:any)=>{
      this.userSrv.connectUser=user
      alert(`נרשמת בהצלחה! ברוך הבא ${user.name}`)
      this.router.navigate(['/home']);
    })

  })

}

}
