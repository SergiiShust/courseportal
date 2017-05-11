import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NoContentComponent} from './no-content/no-content.component';
import {LoginComponent} from "./login/login.component";
import {AddCourseComponent} from "./add-course/add-course.component";
import {AuthGuard} from "./common/services/auth-guard";

export const ROUTES: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: HomeComponent},
  {path: 'courses/new', component: AddCourseComponent, canActivate: [AuthGuard]},
  {path: 'courses/:id', component: AddCourseComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NoContentComponent}
];
