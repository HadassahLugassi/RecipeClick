import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from '../interfaces/Istudents';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  //כתובת URL מהשרת
  url="http://localhost:1111/students/"

  constructor(private myHttp:HttpClient) { }

  getAll():Observable<Array<student>>{
    return this.myHttp.get<Array<student>>(`${this.url}getAll`)
  }

  addStudent(st:student):Observable<boolean>{
      return this.myHttp.post<boolean>(`${this.url}addStudent`, st)
  }
}
