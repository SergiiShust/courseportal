import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'trainme-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor() {
    this.formModel = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
    });
  }

  formModel: FormGroup;

  ngOnInit() {

  }

  save() {
    console.log('save');
  }

  cancel() {
    console.log('cancel');
  }
}
