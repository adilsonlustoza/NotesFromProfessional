import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'chapter8',
  template: `<p>Chapter 8</p>
             <nav style="text-align:center;">
             <a routerLink='8.1' >8.1</a>|
             <a routerLink='8.2' >8.2</a>|
             <a [routerLink]="['8.3', 1]" >8.3</a>
           </nav>
           <div>
              <router-outlet></router-outlet>
           </div>

           `
})
export class Chapter8Component implements OnInit {


  constructor( ) { }


  ngOnInit() {


  }

}
