import {FormControl} from '@angular/forms';

export function authorNotEmpty(c: FormControl): { [key: string]: boolean } {
  return (c.value && c.value.length > 0) ?
    null :
    {'empty': true};
}
