import { Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chapter303',
  templateUrl: './chapter303.component.html',
  styleUrls: ['./chapter303.component.css']
})
export class Chapter303Component implements OnInit {

  @ViewChild('control') control!: QueryList<any>;

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  dynamicForm = new FormArray([new FormControl()]);
  constructor() { }

  ngOnInit() {



  }




  addControl(controlName:any='') {

    let control = new FormControl(controlName,Validators.required);



    this.dynamicForm.push(control);
  }

  removeControl(index: number) {
    this.dynamicForm.push(new FormControl(''));
  }

  onSubmit() {


    for (let index = 0; index < this.dynamicForm.controls.length; index++) {
       let element = ((this.dynamicForm.controls.at(index)) as FormControl);
      const txt = this.control;
       console.log(txt);
    }


  }

}
