import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder} from "@angular/forms";
import {dateValidator} from "../common/components/course-date/date-validator";
import {AuthorService} from "./services/author.service";
import {Author} from "../common/entities/author";
import {authorNotEmpty} from "../common/components/authors-list/author-not-empty-validator";

@Component({
  selector: 'trainme-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  providers: [AuthorService]
})
export class AddCourseComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private authorService: AuthorService) {

  }

  authors: Array<{ checked: boolean, author: Author }> = [];
  formModel: FormGroup;
  formData: {} = {};

  ngOnInit() {
    this.formModel = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      date: ['', [Validators.required, dateValidator]],
      duration: [0, [Validators.required]],
      authors: [[], [authorNotEmpty]],
    });

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
