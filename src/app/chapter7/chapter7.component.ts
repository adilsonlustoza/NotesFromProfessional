import { Component, OnInit, VERSION } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-chapter7',
  templateUrl: './chapter7.component.html',
  styleUrls: ['./chapter7.component.css']
})
export class Chapter7Component implements OnInit {


  local: Location | undefined;
  name = 'Angular2';
  ver = VERSION.full;

  myMoney: number = 100000.653;
  yourMoney: number = 5.3495;

  time = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });



  constructor(_location: Location) {
    _location.go("/chapter6");
  }

  ngOnInit() {

  }


}
