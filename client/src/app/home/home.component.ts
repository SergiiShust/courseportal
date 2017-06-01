import {Component, OnInit} from '@angular/core';
import {Course} from "../common/entities/course";
import {CoursesService, ICourseOptions} from "../common/services/courses.service";
import {CourseDeleteConfirmationComponent} from "./course-delete-confirmation/course-delete-confirmation.component";
import {MdDialog} from "@angular/material";
import {OverlayService} from "../common/components/overlay/overlay-service/overlay-service.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import * as fromRoot from "../redux/reducers" ;
import * as coursesAction from "../redux/actions/courses" ;

const FORTEEN_DAYS: number = 14 * 24 * 60 * 60 * 1000;

@Component({
  selector: 'trainme-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CoursesService]
})
export class HomeComponent implements OnInit {

  constructor(private coursesService: CoursesService,
              private overlayServiceService: OverlayService,
              private dialog: MdDialog,
              private router: Router,
              private store: Store<fromRoot.State>) {
    this.courses$ = store.select(fromRoot.getCourses);
  }

  courses$: Observable<Course[]>;

  courseDeleteHandler(course: Course) {
    let dialogRef = this.dialog.open(CourseDeleteConfirmationComponent);
    dialogRef
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.overlayServiceService.show();
          let subscription = this.coursesService
            .delete(course)
            .finally(() => {
              subscription.unsubscribe();
              this.overlayServiceService.hide();
            })
            .subscribe(() => {
              //  this.courses.splice(this.courses.indexOf(course), 1);
            });
        }
      });
  }

  courseEditHandler(course: Course) {
    this.router.navigate([`/courses/${course.id}`]);
  }

  newSearchText(search) {
    let subscription = this.coursesService.find(search)
      .map((courses) => courses.filter(course => new Date(course.date).getTime() < Date.now() - FORTEEN_DAYS))
      .finally(() => {
        subscription.unsubscribe();
      })
      .subscribe(courses => {
        this.store.dispatch(new coursesAction.LoadCompletedAction(courses));
      });
  }

  addcourse() {
    this.router.navigate(['/courses/new']);
  }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses(options: ICourseOptions = {skip: 0, limit: 3}) {
    let subscription = this.coursesService.getAll(options)
      .map((courses) => courses.filter(course => new Date(course.date).getTime() < Date.now() - FORTEEN_DAYS))
      .finally(() => {
        subscription.unsubscribe();
      })
      .subscribe(courses => {
        this.store.dispatch(new coursesAction.LoadCompletedAction(courses));
      });
  }
}
