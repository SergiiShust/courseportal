import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(value: Array<any>, args?: Array<string>): any {
    debugger;
    return value.filter((value2, index, array) => {
      return value2[args[0]].toLowerCase().includes(args[1].toLowerCase())
    });
  }

}
