import { Component, Input, OnInit } from '@angular/core';
import { dataInterface } from '../model/dataInterface';

@Component({
  selector: 'app-chapter0_2',
  templateUrl: './chapter0_2.component.html',
  styleUrls: ['./chapter0_2.component.css']
})
export class Chapter0_2Component implements OnInit, dataInterface {

  constructor() { }

  data: any;

  ngOnInit() {
    console.log(this.data);
  }

}
