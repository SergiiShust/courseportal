import {Component, OnInit, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

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

  onChange = (_) => {
  };
  onTouched = () => {
  };

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
