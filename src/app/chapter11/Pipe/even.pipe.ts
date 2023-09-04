import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'even',
})
export class EvenPipe implements PipeTransform {
  transform(value: any, param: number): any {


    if (value < param && value && value % 2 === 0) {
      return value;
    }

    return undefined;
  }
}
