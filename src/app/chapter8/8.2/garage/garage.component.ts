import { Component, OnInit } from '@angular/core';
import { CarEntity } from '../car.entity';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',

})
export class GarageComponent implements OnInit {

  public cars: Array<CarEntity> = [];

  constructor() {
    var carOne: CarEntity = new CarEntity('renault', 'blue');
    var carTwo: CarEntity = new CarEntity('fiat', 'green');
    var carThree: CarEntity = new CarEntity('citroen', 'yellow');

    this.cars = [carOne, carTwo, carThree];

  }

  ngOnInit() {

  }

}
