import { Component } from '@angular/core';
import { UserService } from '../../services/userService/user.service.js';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName:string=""
  userPass:string=""
  constructor(private userSrv:UserService){

  }
  usersArr=[]
  checkUser(){
   
  }

}
