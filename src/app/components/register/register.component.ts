import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Users } from '../../interfaces/Users';
import { UserService } from '../../services/userService/user.service.js';
import { Recipes } from '../../interfaces/Recipes';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
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
constructor(private userSrv:UserService){

}
addUser(){
  this.userSrv.addUser(this.user).subscribe((user:any)=>{
    this.userSrv.isThereUser=true
    this.userSrv.getUserByNameAndPass({name:this.user.name,password:this.user.password}).subscribe((user:any)=>{
      this.userSrv.connectUser=user
      alert(`נרשמת בהצלחה! ברוך הבא ${user.name}`)
    })

  })

}

}
