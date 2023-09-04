import { Directive, HostBinding, HostListener } from '@angular/core';
@Directive({
  selector: '[appButtonPress]'
})
export class ButtonPressDirective {


  @HostBinding('style.backgroundColor')
  corfundo = "";


  @HostBinding('attr.role')
  role = 'button';

  @HostBinding('class.pressed')
  isPressed: boolean | undefined;



  @HostListener('mousedown') hasPressed() {
    this.corfundo = "blue";
    this.isPressed = true;
  }
  @HostListener('mouseenter') hasReleased() {
    this.corfundo = "yellow";
    this.isPressed = false;
  }
}
