import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { student } from '../../interfaces/Istudents';

@Component({
  selector: 'app-all-students',
  imports: [],
  templateUrl: './all-students.component.html',
  styleUrl: './all-students.component.css'
})
export class AllStudentsComponent {
students:Array<student>=[{name:'', id:'', pic:'', marks:[{sub:'java',mark:90}]}]
arrKey: (keyof student)[] = Object.keys(this.students[0]) as (keyof student)[];
  // all-students.component.ts
getSubjectEntries(marks: { sub: string; mark: number }[]): [string, number][] {
  
  return marks.map(item => [item.sub, item.mark]);
}

constructor(public studentService:StudentsService){ 
  
  
}

ngOnInit(){
  
  this.studentService.getAll().subscribe((x:any)=>this.students=x)
  
  
}
}
