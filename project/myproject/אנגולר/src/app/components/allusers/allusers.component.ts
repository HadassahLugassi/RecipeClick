import { Component } from '@angular/core';
import { person } from '../../interface/person.interface';
import { UsersService } from '../../services/users.service';
import {  HttpClientModule } from  '@angular/common/http'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-allusers',
  imports: [HttpClientModule],
  templateUrl: './allusers.component.html',
  styleUrl: './allusers.component.css',

})
export class AllusersComponent {
arr:Array<person>=[{tz:"6666", name:"kkkk",idcity:7,pic:""}]
constructor(private us:UsersService, private myhttp:HttpClient){}
ngOnInit(){
  // this.myhttp.get<Array<person>>(`http://localhost:1234/person/getAllp`).subscribe((o:any) =>{this.arr=o})
this.us.getAllusers().subscribe((x:any)=>this.arr=x)

}
}
