import { AbstractControl, Validators } from '@angular/forms';



export class CustomValidator  {

  static cannotContainSpace(control: AbstractControl) {
    if (control.value?.indexOf(' ') >= 0){
      console.log("Write Space detected");
      return { cannotContainSpace: true };
    }
    return null;
  }

}

