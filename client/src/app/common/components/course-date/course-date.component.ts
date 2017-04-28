import {Component, Input, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

const CUSTOM_COURSE_DATE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CourseDateComponent),
  multi: true
};

@Component({
  selector: 'trainme-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.scss'],
  providers: [CUSTOM_COURSE_DATE_VALUE_ACCESSOR]
})
export class CourseDateComponent implements ControlValueAccessor {
  currentValue: string;

  setValue(item) {
    console.log('asdsad')
    this.value = item.target.value;
  }

  set value(newValue) {
    if (newValue) {
      this.currentValue = newValue;
      this.onChange(newValue);
    }
  }

  get value() {
    return this.currentValue;
  }

  writeValue(value: any): void {
    if (value !== this.currentValue) {
      this.currentValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onChange = (_) => {};
  onTouched = () => {};
}
