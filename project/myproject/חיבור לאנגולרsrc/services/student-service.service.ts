import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from '../interface/Istudents';


@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
    url="http://localhost:3000/student/"

  constructor(private StudentHttp:HttpClient) {}
    getAllStudent():Observable<Array<student>>{
      return this.StudentHttp.get<Array<student>>(`${this.url}getAllStudents`)   
    }
    addStudent(newS:student):Observable<boolean>{
      return this.StudentHttp.post<boolean>(`${this.url}addStudent`,newS)
    }
}
