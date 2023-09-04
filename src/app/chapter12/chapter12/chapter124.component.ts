import { Hero } from '../hero';
import { Component, Input, OnInit, TrackByFunction } from '@angular/core';

@Component({
  selector: 'app-chapter124',
  template: `<div *ngFor="let item of items; let i = index">


    <div *ngIf="i % 2 == 0" class="row">
      {{ item }}
      <div *ngIf="i + 1 < items.length">{{ items[i + 1] }}</div>
      <div *ngIf="i + 2 < items.length">{{ items[i + 2] }}</div>
      <div *ngIf="i + 3 < items.length">{{ items[i + 3] }}</div>
      <div *ngIf="i + 4 < items.length">{{ items[i + 4] }}</div>
    </div>


  </div>`,
})
export class Chapter124Component implements OnInit {

  @Input()
  hero: Hero | undefined;

  items  =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,19, 20];

  constructor() { }

  ngOnInit(): void { }
}
