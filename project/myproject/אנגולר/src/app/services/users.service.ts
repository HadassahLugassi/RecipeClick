import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { person } from '../interface/person.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
//נגדיר משתנה url לאיזה קונטרוללר אתה שייך
 baseurl:string="http://localhost:1234/person/"
  constructor(private myhttp:HttpClient) { }
//בשביל לגשת לשרת עלינו:
// 1 :להזריק משתנה מסוג httpclient
  getAllusers():Observable<Array<person>>{
    // return this.המשתנה שהזרקנו.get-שיטת הגישה(`${this.baseurl}getAllp`-לאיפה ללכת)
 return this.myhttp.get<Array<person>>(`${this.baseurl}getAllp`)
  }
}
