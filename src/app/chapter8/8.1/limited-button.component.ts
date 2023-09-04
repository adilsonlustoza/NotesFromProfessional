import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'limited-button',
  template: `<button (click)="onClick()" [disabled]="disabled">
                 <ng-content></ng-content>
             </button>`

})
export class LimitedButton implements OnInit {


  @Input()
  clickLimit!: number;

  @Output()
  limitReached: EventEmitter<number> = new EventEmitter();

  disabled: boolean = false;

  private clickCount: number = 0;

  constructor() { }

  ngOnInit() { }

  onClick() {
    this.clickCount++;
    if (this.clickCount === this.clickLimit) {
      this.disabled = true;
      this.limitReached.emit(this.clickCount);
    }
  }
}





