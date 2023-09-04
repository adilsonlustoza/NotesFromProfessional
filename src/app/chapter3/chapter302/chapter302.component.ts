import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-chapter302',
  templateUrl: './chapter302.component.html',
  styleUrls: ['./chapter302.component.css'],
})
export class Chapter302Component implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addControl();
  }

  dynamicForm = this.fb.group({
    skills: this.fb.array([]),
  });

  get skills(): FormArray {
    return this.dynamicForm.get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: new FormControl(''),
    });
  }

  addControl() {
    this.skills?.push(this.newSkill());
  }

  removeControl(index: number) {
    this.skills?.removeAt(index);
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }
}
