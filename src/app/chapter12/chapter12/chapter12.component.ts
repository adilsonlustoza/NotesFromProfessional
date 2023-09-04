import { Component, Input, OnInit, TrackByFunction } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-chapter12',
  templateUrl: './chapter12.component.html',
  styleUrls: ['./chapter12.component.css']
})
export class Chapter12Component implements OnInit {

  @Input()
  hero: Hero | undefined;

  heroes = new Array<Hero>({ id: 1, name: "Adilson" }, { id: 1, name: "Luciana" }, { id: 3, name: "Vanessa" })

  constructor() { }

  ngOnInit() {
  }


  trackByFn(content: any) {
    console.log(JSON.parse(content));

  }

}
