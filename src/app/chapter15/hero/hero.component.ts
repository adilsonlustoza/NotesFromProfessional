import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'

})
export class HeroComponent implements OnInit {

  heroes = new Array<Hero>({ id: 3, name: "Vanessa" },{ id: 1, name: "Adilson" }, { id: 1, name: "Luciana" })

  constructor() { }

  ngOnInit() {
  }

}
