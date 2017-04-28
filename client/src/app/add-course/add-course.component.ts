import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder} from "@angular/forms";
import {dateValidator} from "../common/components/course-date/date-validator";

@Component({
  selector: 'trainme-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor( private formBuilder:FormBuilder,) {

  }


  formModel: FormGroup;

  ngOnInit() {
    this.formModel = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description:['', [Validators.required, Validators.maxLength(500)]],
      date: ['', [Validators.required]],
      duration: ['', [Validators.required]],
    });
  }

  save() {
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
