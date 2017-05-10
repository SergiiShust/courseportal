import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder} from "@angular/forms";
import {dateValidator} from "../common/components/course-date/date-validator";
import {AuthorService} from "./services/author.service";
import {Author} from "../common/entities/author";
import {authorNotEmpty} from "../common/components/authors-list/author-not-empty-validator";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {CoursesService} from "../home/services/courses.service";
import {Course} from "../common/entities/course";

@Component({
  selector: 'trainme-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  providers: [AuthorService, CoursesService]
})
export class AddCourseComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private authorService: AuthorService,
              private courseService: CoursesService,
              private route: ActivatedRoute) {

  }

  authors: Array<{ checked: boolean, author: Author }> = [];
  formModel: FormGroup;
  formData: {} = {};

  ngOnInit() {
    let idParam = this.route.snapshot.params['id'];
    if (idParam !== 'new') {
      this.courseService
        .getById(idParam)
        .subscribe((course: Course) => {
          this.createForm(course);
        });
    } else {
      this.createForm();
    }

    this.authorService.getAll()
      .map(authors => {
        return authors.map((author) => {
          return {checked: false, author: author}
        });
      })
      .subscribe((data) => {
        this.authors = data;
      })
  }

  private createForm(course?: Course) {
    this.formModel = this.formBuilder.group({
      title: [course ? course.title : '', [Validators.required, Validators.maxLength(50)]],
      description: [course ? course.description : '', [Validators.required, Validators.maxLength(500)]],
      date: [course ? course.date : '', [Validators.required, dateValidator]],
      duration: [course ? course.duration : 0, [Validators.required]],
      authors: [course ? course.authors : [], [authorNotEmpty]],
    });
  }

  save() {
    this.formData = this.formModel.value;
    console.log('save');
  }

  cancel() {
    console.log('cancel');
  }

  hasError(validator, field) {
    let result = this.formModel ?
      this.formModel.hasError(validator, [field]) && this.formModel.get(field).dirty :
      false;

    return result;
  }
}
