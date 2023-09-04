import { Component, OnChanges, Input } from '@angular/core';
@Component({
  selector: 'child-component',
  template: ` <p *ngIf="doesDataExist">Hello child</p> `,
})
export class ChildComponent {
  doesDataExist: boolean = false;

  @Input('data')
  data: any;

  ngOnChanges() {
    if (this.data) this.useData(this.data);
  }

  useData(data: any) {
    this.doesDataExist = true;
  }


}
