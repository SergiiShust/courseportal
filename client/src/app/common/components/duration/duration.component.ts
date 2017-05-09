import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const CUSTOM_DURATION_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DurationComponent),
  multi: true
};


@Component({
  selector: 'trainme-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  providers: [CUSTOM_DURATION_VALUE_ACCESSOR]
})
export class DurationComponent implements ControlValueAccessor {
  currentValue: number;

  setValue(item) {
    this.value = item.target.value;
  }

  set value(newValue) {
    console.log(newValue);
    if (Number.isInteger(newValue) || newValue == null) {
      this.currentValue = newValue;
      this.onChange(newValue);
    }
  }

  get value() {
    return this.currentValue;
  }

  writeValue(value: any): void {
    if (value !== this.currentValue) {
      this.value = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onChange = (_) => {
  };
  onTouched = () => {
  };
}
