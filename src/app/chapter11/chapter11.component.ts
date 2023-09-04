import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter11',
  templateUrl: './chapter11.component.html',
  styleUrls: ['./chapter11.component.css']
})
export class Chapter11Component implements OnInit {

  numbers = Array.from([1,2,3,4,5,6,7,8,9,10,11,12,13]);

  constructor() { }

  ngOnInit() {
  }

}
