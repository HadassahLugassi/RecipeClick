import { Component } from '@angular/core';
import { student } from '../src/interface/Istudents';
import { StudentsService } from '../../services/students.service';


@Component({
  selector: 'app-newc',
  imports: [],
  templateUrl: './newc.component.html',
  styleUrl: './newc.component.css'
})
export class NewcComponent {
allStudents:Array<student>=[{mane:'',id:'',pic:'',marks:[{sub:'java',mark:90}]}]
constructor(public studentService)
}
