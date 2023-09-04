import { Component, Inject, Injector, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'student',
  template: `
      <div *ngFor="let std of students">
         <p>{{std.name}} - {{std.age}}</p>
      </div>
    `
})
export class StudentComponent implements OnInit {

  constructor(@Inject('students')   public students: Student[])
   {

   }

  ngOnInit(): void {

  }



}
