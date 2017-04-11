import {Injectable} from '@angular/core';
import {Course} from "../../common/entities/course";
import {Observable} from "rxjs";

@Injectable()
export class CoursesService {

  constructor() {
  }

  getAll(): Observable<Course[]> {
    return Observable.of(this.courses);
  }

  getById(courseId: string): Observable<Course> {
    return Observable.of(this.courses.find(course => course.id == courseId));
  }

  create(course: Course): Observable<Course> {
    this.courses.push(course);
    return Observable.of(course);
  }

  update(course: Course): Observable<Course> {
    let oldCourse = this.courses.find(oldCourse => oldCourse.id == course.id)
    this.courses.splice(this.courses.indexOf(oldCourse), 1, course);
    return Observable.of(course);
  }

  delete(course: Course): Observable<Course> {
    this.courses.splice(this.courses.indexOf(course), 1);
    return Observable.of(course);
  }


  courses = Array<Course>({
    "id": "6ea5b973-b86c-491d-b345-0b8b03b1d42d",
    "title": "Community Outreach Specialist",
    "date": "2017-04-01T08:15:30-05:00",
    "duration": 143,
    "description": "Open-architected exuding framework",
    "topRated": true
  }, {
    "id": "6b8101fa-2336-468d-aa5b-58da60529c41",
    "title": "Account Coordinator",
    "date": "2017-04-03T08:15:30-05:00",
    "duration": 144,
    "description": "Total encompassing structure",
    "topRated": false
  }, {
    "id": "816e28b3-a1d6-46d7-bc84-e6e5d976fc1b",
    "title": "Nurse",
    "date": "2017-03-01T08:15:30-05:00",
    "duration": 101,
    "description": "Open-source systematic secured line",
    "topRated": true
  }, {
    "id": "9aa3136e-e6c1-4782-aaf6-349547126fc8",
    "title": "Quality Engineer",
    "date": "2017-04-01T08:15:30-05:00",
    "duration": 191,
    "description": "User-friendly solution-oriented throughput",
    "topRated": false
  }, {
    "id": "d3a2d3bc-d51c-4b89-8e97-2bed1cc9278e",
    "title": "Programmer Analyst III",
    "date": "2017-01-01T08:15:30-05:00",
    "duration": 159,
    "description": "Self-enabling full-range instruction set",
    "topRated": false
  });
}
