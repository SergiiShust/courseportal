import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NoContentComponent} from './no-content/no-content.component';
import {LoginComponent} from "./login/login.component";
import {AddCourseComponent} from "./add-course/add-course.component";

export const ROUTES: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: HomeComponent},
  {path: 'courses/new', component: AddCourseComponent},
  {path: 'courses/:id', component: AddCourseComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NoContentComponent}
];
