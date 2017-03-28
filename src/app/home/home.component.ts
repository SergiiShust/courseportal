import {Component, OnInit} from '@angular/core';
import {Course} from "../common/entities/course";
import {CoursesService} from "./services/courses.service";
import {CourseDeleteConfirmationComponent} from "./course-delete-confirmation/course-delete-confirmation.component";
import {MdDialog} from "@angular/material";

@Component({
  selector: 'trainme-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CoursesService]
})
export class HomeComponent implements OnInit {

  courses: Array<Course>;

  constructor(private coursesService: CoursesService,
              private dialog: MdDialog) {
  }

  courseDeleteHandler(course: Course) {
    let dialogRef = this.dialog.open(CourseDeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.coursesService.delete(course)
          .subscribe(() => this.courses.slice(this.courses.indexOf(course), 1));
      }
    });

  }

  ngOnInit() {
    this.coursesService.getAll()
      .subscribe(courses => this.courses = courses);
  }
}
