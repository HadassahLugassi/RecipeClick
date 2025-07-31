import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../../interfaces/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isThereUser:boolean=false
  connectUser:Users={
    _id:"",
    name:"",
    password:"",
    address:"" ,
    phone:"",
    isManager:false,
    favoriteRecipesId:[]
  }
wantToDelet:boolean=false
  url:string="http://localhost:3000/users/"

  getAllUsers():Observable<Array<Users>>{
    return this.Http.get<Array<Users>>(`${this.url}getAllUsers`)
  }
  getUserByNameAndPass(nameAndPass:any):Observable<Users>{
    return this.Http.post<Users>(`${this.url}getUserByNameAndPass`,nameAndPass)
  }
  getFavoriteRecipesIdByUserId(userId:string):Observable<Array<string>>{
    return this.Http.get<Array<string>>(`${this.url}getFavoriteRecipesIdByUserId/${userId}`)
  }
  addUser(user:Users):Observable<boolean>{
    return this.Http.post<boolean>(`${this.url}addUser`,user)
  }
  addfavoriteRecipesId(userAndRecipe:string):Observable<boolean>{
    return this.Http.post<boolean>(`${this.url}addFavoriteRecipesId`,userAndRecipe)
  }
  //updatefavoriteRecipesId

  constructor(private Http:HttpClient) { }
}
