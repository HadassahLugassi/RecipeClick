import { Component } from '@angular/core';
import { student } from '../../interface/Istudents';
import { StudentServiceService } from '../../services/student-service.service';

@Component({
  selector: 'app-all-students',
  imports: [],
  templateUrl: './all-students.component.html',
  styleUrl: './all-students.component.css'
})
export class AllStudentsComponent {
allStudents:Array<student>=[{name:'',id:'',pic:'',marks:[{sub:'java',mark:90}]}]
allStudentsKeys:(keyof student)[]=Object.keys(this.allStudents[0] )as (keyof student)[];
getMarks(marks:{sub:string;mark:number}[]):[string,number][]{
  return marks.map(item=>[item.sub,item.mark]);
}
constructor(public studentService:StudentServiceService){ 
}
ngOnInit(){
  this.studentService.getAllStudent().subscribe((x:any)=>this.allStudents=x)
}

}
