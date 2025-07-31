import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { student } from '../../interfaces/Istudents';
import { Mark } from '../../interfaces/Imark';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  newStudent: student = { name: '', id: '', pic: '', marks: [] }
  newMark: Mark = { sub: "", mark: 0 }
  // sub:string=""
  // mark:number=0
  constructor(private studentService: StudentsService) { }

  addNewSub() {
    this.newStudent.marks.push(this.newMark)
    console.log(this.newStudent);
    this.newMark = { sub: "", mark: 0 }
  }
  addStudent(){
    this.studentService.addStudent(this.newStudent).subscribe((succes:boolean)=>{
      if(succes){
        alert("student added succesfully!")
      }
      else{
        alert("faild...")
      }
    })
  }

}
