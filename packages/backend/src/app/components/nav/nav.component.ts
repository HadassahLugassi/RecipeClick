import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/userService/user.service.js';

@Component({
  selector: 'app-nav',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

constructor(public usersSrv:UserService){

}
disConnected(){
  this.usersSrv.isThereUser=false
  this.usersSrv.connectUser={
    _id:"",
    name:"",
    password:"",
    address:"" ,
    phone:"",
    isManager:false,
    favoriteRecipesId:[]
  }

}
}
