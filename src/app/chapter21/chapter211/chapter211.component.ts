import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chapter211',
  templateUrl: './chapter211.component.html',
  styleUrls: ['./chapter211.component.css']
})
export class Chapter211Component implements OnInit {

  @Input() hero: string | undefined;
  @Input() power: string | undefined;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    for (let propName in changes) {
      let chug = changes[propName];
      let cur = JSON.stringify(chug.currentValue);
      let prev = JSON.stringify(chug.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngDoCheck() {
    console.log("DO CHECK")
  }
}


