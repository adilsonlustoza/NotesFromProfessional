import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../interfaces/AdComponent';

@Component({
  selector: 'app-chapter19_3',
  templateUrl: './chapter19_3.component.html',
  styleUrls: ['./chapter19_3.component.css']
})
export class Chapter19_3Component implements OnInit, AdComponent {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }
}
