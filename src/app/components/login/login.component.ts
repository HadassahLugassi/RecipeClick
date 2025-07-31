import { Component } from '@angular/core';
import { UserService } from '../../services/userService/user.service.js';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:any={
    name:"",
    password:""
  }
  constructor(private userSrv:UserService){
    
  }

  checkUser(){
    this.userSrv.getUserByNameAndPass(this.user).subscribe((x:any)=>{
      this.userSrv.isThereUser=true
      this.userSrv.connectUser=x
    })  
  }
}
