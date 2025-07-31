import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AllStudentsComponent } from '../all-students/all-students.component';
import { AddStudentComponent } from '../add-student/add-student.component';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterOutlet, AddStudentComponent, AllStudentsComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
