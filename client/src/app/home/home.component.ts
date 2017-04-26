import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course} from "../common/entities/course";
import {CoursesService, ICourseOptions} from "./services/courses.service";
import {CourseDeleteConfirmationComponent} from "./course-delete-confirmation/course-delete-confirmation.component";
import {MdDialog} from "@angular/material";
import {OverlayService} from "../common/components/overlay/overlay-service/overlay-service.service";
import {FilterByPipe} from "../common/pipes/filter-by.pipe";
import * as moment from 'moment';
import {Router} from "@angular/router";

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
              private router: Router) {
  }

  courses: Array<Course> = [];

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
              this.overlayServiceService.hide()
            })
            .subscribe(() => {
              this.courses.splice(this.courses.indexOf(course), 1)
            });
        }
      });
  }

  newSearchText(search) {
    let subscription = this.coursesService.find(search)
      .map((courses) => courses.filter(course => new Date(course.date).getTime() < Date.now() - FORTEEN_DAYS))
      .finally(() => {
        subscription.unsubscribe()
      })
      .subscribe(courses => this.courses = courses);
  }

  addcourse() {
    this.router.navigate(['/addcourse']);
  }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses(options: ICourseOptions = {skip: 0, limit: 3}) {
    let subscription = this.coursesService.getAll(options)
      .map((courses) => courses.filter(course => new Date(course.date).getTime() < Date.now() - FORTEEN_DAYS))
      .finally(() => {
        subscription.unsubscribe()
      })
      .subscribe(courses => this.courses = courses);
  }
}
