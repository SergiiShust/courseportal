import {Injectable} from '@angular/core';
import {Course} from "../../common/entities/course";
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Injectable()
export class CoursesService {

  constructor(private http: Http) {
  }

  getAll(): Observable<Course[]> {
    return this.http.get('/course')
      .map(responce => responce.json())
      .map(courses => courses.map(
        course => new Course(course.id,
          course.name,
          course.date,
          course.duration,
          course.description,
          course.isTopRated)
      ));
  }

  delete(course: Course): Observable<string> {
    return this.http.delete(`/course/${course.id}`)
      .map(() => course.id)
  }
}
