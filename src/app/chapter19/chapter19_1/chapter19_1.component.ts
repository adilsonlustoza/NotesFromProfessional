import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../interfaces/AdComponent';

@Component({
  selector: 'app-chapter19_1',
  templateUrl: './chapter19_1.component.html',
  styleUrls: ['./chapter19_1.component.css']
})
export class Chapter19_1Component implements OnInit, AdComponent {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
