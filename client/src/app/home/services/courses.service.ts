import {Injectable} from '@angular/core';
import {Course} from "../../common/entities/course";
import {Observable} from "rxjs";
import {Http, URLSearchParams} from "@angular/http";

export interface ICourseOptions {
  skip: number;
  limit: number;

}

@Injectable()
export class CoursesService {

  constructor(private http: Http) {
  }

  getAll(options: ICourseOptions): Observable<Course[]> {

    let searchParams = new URLSearchParams();
    if (options) {
      debugger;
      searchParams.append('skip', options.skip.toString());
      searchParams.append('limit', options.limit.toString());
    }

    return this.http.get('/course', {search: searchParams})
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

  find(title: string): Observable<Course[]> {
    return this.http.post('/course/find', {where: {name: {contains: title}}})
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
