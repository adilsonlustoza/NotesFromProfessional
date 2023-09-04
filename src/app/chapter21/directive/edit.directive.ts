import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myEdit]'
})
export class EditDirective {

  constructor(public el: ElementRef) {
    this.el.nativeElement;
  }

  public GetElements():any {
    var el = this.el.nativeElement;
    console.log(`Values ${el.value}`);
    this.el.nativeElement.value = el.id;

  }

}
