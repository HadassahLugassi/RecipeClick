import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { New1Component } from '../components/new1/new1.component';
import { AllStudentsComponent } from '../components/all-students/all-students.component';
import { AddStudentComponent } from '../components/add-student/add-student.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AllStudentsComponent,AddStudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myp';
}
