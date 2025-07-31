import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../../interfaces/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isThereUser:boolean=true
  connectUserName="הדסה"

  url:string="http://localhost:3000/users/"
  getAllUsers():Observable<Array<Users>>{
    return this.Http.get<Array<Users>>(`${this.url}getAllUsers`)
  }
  getUserByNameAndPass(nameAndPass:object):Observable<Users>{
    return this.Http.get<Users>(`${this.url}getUserByNameAndPass`,nameAndPass)
  }
  getFavoriteRecipesIdByUserId():Observable<Array<string>>{
    return this.Http.get<Array<string>>(`${this.url}getFavoriteRecipesIdByUserId/:id`)
  }
  addUser(user:Users):Observable<boolean>{
    return this.Http.post<boolean>(`${this.url}addUser`,user)
  }
  addfavoriteRecipesId(id:string):Observable<boolean>{
    return this.Http.post<boolean>(`${this.url}/addfavoriteRecipesId`,id)
  }
  //updatefavoriteRecipesId

  constructor(private Http:HttpClient) { }
}
