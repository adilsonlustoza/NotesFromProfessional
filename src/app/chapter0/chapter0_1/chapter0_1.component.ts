import { Component, Input, OnInit } from '@angular/core';
import { dataInterface } from '../model/dataInterface';

@Component({
  selector: 'app-chapter0_1',
  templateUrl: './chapter0_1.component.html',
  styleUrls: ['./chapter0_1.component.css']
})
export class Chapter0_1Component implements OnInit, dataInterface {

  constructor() { }
   data: any;

  ngOnInit() {
    console.log(this.data);
  }

}
