import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
 usersArr:Array<User>=new Array<User>()
 isThereUser:boolean=false
 connectUserName:string=""
  constructor() { 
    this.usersArr.push({name:"a",pass:"1"})
    this.usersArr.push({name:"b",pass:"2"})
    this.usersArr.push({name:"c",pass:"3"})
    this.usersArr.push({name:"d",pass:"4"})
    this.usersArr.push({name:"e",pass:"5"})
  }
}
