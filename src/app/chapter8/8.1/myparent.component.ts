import { Component } from '@angular/core';
import { LimitedButton } from './limited-button.component';

@Component({
  selector: 'my-parent-component',
  template: `<limited-button
    [clickLimit]="2"
    (limitReached)="onLimitReached($event)"
  >
    You can only click me twice
  </limited-button>`

})
export class MyParentComponent {
  onLimitReached(clickCount: number) {
    alert('Button disabled after ' + clickCount + ' clicks.');
  }
}
