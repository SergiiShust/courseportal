import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'trainme-course-delete-confirmation',
  templateUrl: './course-delete-confirmation.component.html',
  styleUrls: ['./course-delete-confirmation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDeleteConfirmationComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<CourseDeleteConfirmationComponent>) {}

  ngOnInit() {
  }

}
