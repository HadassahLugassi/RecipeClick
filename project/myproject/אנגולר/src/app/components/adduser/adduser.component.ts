import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { person } from '../../interface/person.interface';
import { HttpClient } from '@angular/common/http';
import {  HttpClientModule } from  '@angular/common/http'
@Component({
  selector: 'app-adduser',
  imports: [FormsModule,HttpClientModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  newuse:person={name:"",tz:"",pic:'',idcity:0}
  // 1:יבוא משתנה מסוג HttpClient
//2:import {  HttpClientModule } from  '@angular/common/http'

  constructor(private myhttp:HttpClient){}
  send(){
    //post -מבקש לקבל אובייקט
this.myhttp.post<boolean>(`http://localhost:1234/person/add`,this.newuse).subscribe((o:boolean)=>{if(o==true)
alert("נוסף")})
  }
}
