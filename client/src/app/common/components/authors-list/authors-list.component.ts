import {Component, OnInit, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import {Author} from "../../entities/author";

const CUSTOM_ATHOR_LIST_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AuthorsListComponent),
  multi: true
};

@Component({
  selector: 'trainme-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
  providers: [CUSTOM_ATHOR_LIST_VALUE_ACCESSOR]
})
export class AuthorsListComponent implements ControlValueAccessor {
  @Input()
  authors: Array<{ checked: boolean, author: Author }> = [];

  currentValue: Array<Author>;

  setValue(item) {
    this.currentValue =
      this.authors
        .filter(item => item.checked)
        .map(item=> item.author);
    this.onChange(this.currentValue);
  }

  get value() {
    return this.currentValue;
  }

  writeValue(value: any): void {
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
