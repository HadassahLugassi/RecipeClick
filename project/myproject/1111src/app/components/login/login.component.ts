import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyServiceService } from '../../service/my-service.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  uName:string=""
  uPass:string=""
constructor(public s:MyServiceService){

}
checkUser(){
  let isExistUser=this.s.usersArr.filter(x=>x.name==this.uName && x.pass==this.uPass)
  if(isExistUser.length>0){
    this.s.isThereUser=true
    this.s.connectUserName=this.uName
  }
}

}
