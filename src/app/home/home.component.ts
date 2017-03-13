import { Component, OnInit } from '@angular/core';
import {Course} from "../common/entities/course";

@Component({
  selector: 'trainme-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses:Array<Course>;

  constructor() {
    this.courses = null;
  }

  courseDeleteHandler(course:Course){
    console.log(course.id);
  }

  ngOnInit() {
    this.courses = Array<Course>({
      "id": "6ea5b973-b86c-491d-b345-0b8b03b1d42d",
      "title": "Community Outreach Specialist",
      "createdDate": "2016-04-25T15:58:48Z",
      "duration": 143,
      "description": "Open-architected exuding framework"
    }, {
      "id": "6b8101fa-2336-468d-aa5b-58da60529c41",
      "title": "Account Coordinator",
      "createdDate": "2016-10-17T23:53:59Z",
      "duration": 144,
      "description": "Total encompassing structure"
    }, {
      "id": "816e28b3-a1d6-46d7-bc84-e6e5d976fc1b",
      "title": "Nurse",
      "createdDate": "2016-03-26T03:53:03Z",
      "duration": 101,
      "description": "Open-source systematic secured line"
    }, {
      "id": "9aa3136e-e6c1-4782-aaf6-349547126fc8",
      "title": "Quality Engineer",
      "createdDate": "2016-06-06T20:29:24Z",
      "duration": 191,
      "description": "User-friendly solution-oriented throughput"
    }, {
      "id": "d3a2d3bc-d51c-4b89-8e97-2bed1cc9278e",
      "title": "Programmer Analyst III",
      "createdDate": "2016-06-13T23:51:18Z",
      "duration": 159,
      "description": "Self-enabling full-range instruction set"
    });
  }

}
