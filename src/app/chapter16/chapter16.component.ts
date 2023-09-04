import { CustomValidator } from './CustomValidator';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chapter16',
  templateUrl: './chapter16.component.html',
  styleUrls: ['./chapter16.component.css']
})
export class Chapter16Component implements OnInit {



  @ViewChild('chield')
  chield!: ElementRef;

  public checkoutForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {

    this.checkoutForm = this.formBuilder.group({
      name: new FormControl("Adilson", Validators.compose([Validators.maxLength(55), Validators.required])),
      address: new FormControl('Nsa Sra Bom Cons.', [Validators.maxLength(55), Validators.required, CustomValidator.cannotContainSpace])
    });

  }


  onSubmit() {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
    console.log(this.chield)
    this.chield.nativeElement.setAttribute('style', 'color:red');

  }



  ngOnInit() {
  }

}
