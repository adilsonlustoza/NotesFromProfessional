import { OnDestroy, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countdown',
  pure:false
})
export class CountdownPipe implements PipeTransform, OnDestroy {

  private interval: any;

  private remainingTime: number=5000;


  transform(value: any, interval: number = 1000): any {

    if (!parseInt(value, 10)) {
         return null;
    }

    if (typeof this.remainingTime !== 'number') {
      this.remainingTime = parseInt(value, 10);
    }

    if (!this.interval) {


      this.interval = setInterval(() => {

        this.remainingTime--;

        if (this.remainingTime <= 0) {

          this.remainingTime = 0;

          clearInterval(this.interval);

          delete this.interval;

        }
      }, interval);
    }
    return this.remainingTime;
  }


  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
