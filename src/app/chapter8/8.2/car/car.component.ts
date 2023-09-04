import { Component, Input, OnInit } from '@angular/core';
import { CarEntity } from '../car.entity';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']


})
export class CarComponent implements OnInit {

  @Input()
  public car: CarEntity | undefined;

  constructor() {

  }

  ngOnInit(): void {
    console.log(JSON.stringify(this.car));
  }

}
