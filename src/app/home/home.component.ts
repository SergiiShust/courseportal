import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course} from "../common/entities/course";
import {CoursesService} from "./services/courses.service";
import {CourseDeleteConfirmationComponent} from "./course-delete-confirmation/course-delete-confirmation.component";
import {MdDialog} from "@angular/material";
import {OverlayService} from "../common/components/overlay/overlay-service/overlay-service.service";

@Component({
  selector: 'trainme-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CoursesService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  courses: Array<Course>;

  constructor(private coursesService: CoursesService,
              private overlayServiceService: OverlayService,
              private dialog: MdDialog) {
  }

  courseDeleteHandler(course: Course) {
    let dialogRef = this.dialog.open(CourseDeleteConfirmationComponent);
    dialogRef
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.overlayServiceService.show();
          this.coursesService
            .delete(course)
            .delay(1000)
            .finally(() => {
              this.overlayServiceService.hide()
            })
            .subscribe(() => this.courses.slice(this.courses.indexOf(course), 1));
        }
      });
  }

  ngOnInit() {
    this.coursesService.getAll()
      .subscribe(courses => this.courses = courses);
  }
}
