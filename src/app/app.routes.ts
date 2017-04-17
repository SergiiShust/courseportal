import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/no-content.component';
import {LoginComponent} from "./login/login.component";
import {AddCourseComponent} from "./add-course/add-course.component";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'addcourse', component: AddCourseComponent},
  {path: '**', component: NoContentComponent}
];
