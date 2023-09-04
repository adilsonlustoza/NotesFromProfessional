import { Hero } from '../hero';
import { Component, Input, OnInit, TrackByFunction } from '@angular/core';

@Component({
  selector: 'app-chapter121',
  template: `<div class='alert alert-primary'>{{hero?.name}}</div>`
})
export class Chapter121Component implements OnInit {

  @Input()
  hero: Hero | undefined;


  constructor() { }

  ngOnInit() {
  }




}
