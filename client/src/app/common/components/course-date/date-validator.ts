import {FormControl} from '@angular/forms';

export function dateValidator(c: FormControl): { [key: string]: boolean } {
  let EMAIL_REGEXP = new RegExp('[0-9]{2}.[0-9]{2}.[0-9]{4}');
  return EMAIL_REGEXP.test(c.value) ?
    null :
    {'invalidDate': true};
}
