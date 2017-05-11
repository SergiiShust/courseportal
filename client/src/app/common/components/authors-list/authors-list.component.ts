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
  set authors(authors: Array<Author>) {
    this._authors = authors.map((author) => {
      return {checked: false, author: author}
    });
  }

  _authors: Array<{ checked: boolean, author: Author }> = [];

  currentValue: Array<Author>;

  setValue(item) {
    debugger;

    this.currentValue =
      this._authors
        .filter(item => item.checked)
        .map(item => item.author);
    this.onChange(this.currentValue);

  }

  get value() {
    debugger;

    return this.currentValue;
  }

  writeValue(value: Array<Author>): void {
    value.forEach((author) => {
      this._authors
        .filter((value2) => value2.author.id == author.id)
        .forEach((value2) => {
          value2.checked = true;
        })
    });
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
