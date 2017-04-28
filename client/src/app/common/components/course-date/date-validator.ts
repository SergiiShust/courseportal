import {FormControl} from '@angular/forms';

export function dateValidator(c: FormControl): { [key: string]: boolean } {
  let EMAIL_REGEXP = new RegExp('\\d{2}.\\d{2}.\\d{4}.');
  return EMAIL_REGEXP.test(c.value) ?
    null :
    {'invalidEmail': true};
}
