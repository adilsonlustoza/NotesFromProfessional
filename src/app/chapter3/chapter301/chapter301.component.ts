import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-chapter301',
  templateUrl: './chapter301.component.html',
  styleUrls: ['./chapter301.component.css']
})
export class Chapter301Component implements OnInit {

  dynamicForm !: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder) {


  }

  ngOnInit() {

    this.dynamicForm = this.formBuilder.group({
      numberOfTickets: ['', Validators.required],
      tickets: new FormArray([])

    });

  }

  get Controls() {
    return this.dynamicForm.controls;
  }

  //get ArrayControls() { return this.Controls['tickets'] as FormArray; }

  get ArrayControls() { return this.Controls['tickets'] as FormArray; }

  get ticketFormGroups() { return this.ArrayControls.controls as FormGroup[]; }

  onChangesTickets(e: any): void {

    const numberOfTickets = e.target.value || 0;

    if (this.ArrayControls.length < numberOfTickets) {

      if (this.ArrayControls.length === 0) {
        this.onClear();
      }

      for (let i = this.ArrayControls.length; i < numberOfTickets; i++) {


        this.ArrayControls.push(this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]]
        }));



      }
    }
    else {
      for (let i = this.ArrayControls.length; i >= numberOfTickets; i--) {
        this.ArrayControls.removeAt(i);
      }
    }
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dynamicForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
  }

  onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.dynamicForm.reset();
    this.ArrayControls.clear();
  }

  onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
    this.ArrayControls.reset();
  }



}
