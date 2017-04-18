import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    if (value < 10) {
      return `0${value} min`
    } else if (value < 60) {
      return `${value} min`
    } else if (value % 60 < 10) {
      return `${parseInt((value / 60).toString())} h 0${value % 60} min`
    }

    return `${parseInt((value / 60).toString())} h ${value % 60} min`;
  }
}
