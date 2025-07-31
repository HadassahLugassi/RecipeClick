import { Routes } from '@angular/router';
import { AllStudentsComponent } from '../components/all-students/all-students.component';
import { AddStudentComponent } from '../components/add-student/add-student.component';

export const routes: Routes = [
    {path:'' , component:AllStudentsComponent},
    {path:'allStudents', component:AllStudentsComponent},
    {path:'addStudent', component:AddStudentComponent}
];
