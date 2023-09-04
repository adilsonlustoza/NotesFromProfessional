import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../interfaces/AdComponent';

@Component({
  selector: 'app-chapter19_2',
  templateUrl: './chapter19_2.component.html',
  styleUrls: ['./chapter19_2.component.css']
})
export class Chapter19_2Component implements OnInit, AdComponent {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
