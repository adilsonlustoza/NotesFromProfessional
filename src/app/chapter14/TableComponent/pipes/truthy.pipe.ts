import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truthy'
})
export class TruthyPipe implements PipeTransform {

  transform(value: any, truthy: string,falsey:string): any {

    if (typeof value === "boolean") {return value?truthy:falsey}
    else value;
  }

}
