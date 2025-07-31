import { Component } from '@angular/core';
import { student } from '../../interface/Istudents';
import { StudentServiceService } from '../../services/student-service.service';

@Component({
  selector: 'app-new1',
  imports: [],
  templateUrl: './new1.component.html',
  styleUrl: './new1.component.css'
})
export class New1Component {
  student:Array<student>=[{name:'',id:'',pic:'',marks:[{sub:'java',mark:90}]}]
arrKey: (keyof student)[] = Object.keys(this.student[0]) as (keyof student)[];
  // all-students.component.ts
getSubjectEntries(marks: { sub: string; mark: number }[]): [string, number][] {
  
  return marks.map(item => [item.sub, item.mark]);
}

constructor(public studentService:StudentServiceService){ 
  
  
}

ngOnInit(){
  
  this.studentService.getAllStudent().subscribe((x:any)=>this.student=x)
  
  
}
}