import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {Course} from "../../common/entities/course";

@Component({
  selector: 'trainme-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input()
  public course:Course;

  @Output()
  public deleteCourse: EventEmitter<Course> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDeleteHandler(course:Course){
    this.deleteCourse.emit(course);
  }
}
