import { Component } from '@angular/core';
import { student } from '../../interface/Istudents';
import { Mark } from '../../interface/Imark';
import { StudentServiceService } from '../../services/student-service.service';

@Component({
  selector: 'app-add-student',
  imports: [],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  newStudent:student={name:'',id:'',pic:'',marks:[]}
  newMarks:Mark={sub:"",mark:0}
  name:string=''
  id:string=''
  constructor(private studentService: StudentServiceService){

  }
  addStudent(){
    this.studentService.addStudent(this.newStudent).subscribe((succes:boolean)=>{
      if(succes){alert("student added!")}
      else{alert("error")}

    })
  }
  addNewSub(){
    this.studentService.addStudent(this.newStudent).subscribe((succes:boolean)=>{
      if(succes){
        alert("added!!")
      }
      else{
        alert("error!")
      }
    })
  }

}
