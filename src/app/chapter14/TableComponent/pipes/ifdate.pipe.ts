import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ifdate',
  pure: true
})
export class IfDatePipe implements PipeTransform {

  private datePipe: DatePipe = new DatePipe('en-US');

  transform(value: any, pattern: string): any {
    if (typeof value === 'number') { return value }


    try {
      return this.datePipe.transform(value, pattern);
    } catch (error) {

    }


  }

}
