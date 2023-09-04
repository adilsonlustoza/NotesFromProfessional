import { Component, OnInit } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-chapter6',
  templateUrl: './chapter6.component.html',
  styleUrls: ['./chapter6.component.scss']
})
export class Chapter6Component implements OnInit {


  items: Array<Item> = new Array<Item>(
    { id: 1, name: 'Adilson' },
    { id: 2, name: 'Sueli' },
    { id: 3, name: 'Vanessa' },);

  constructor() { }

  ngOnInit() {
  }

}
