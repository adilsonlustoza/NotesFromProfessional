import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-TableComponent',
  templateUrl: './TableComponent.component.html',
  styleUrls: ['./TableComponent.component.css']

})
export class TableComponentComponent implements OnInit {

  pipes = ['', '', '', 'humanizeDate', 'statusFromBoolean'];

  header = ['id', 'title', 'url', 'created', 'status'];





  rows = [
    [1, 'Home', 'home', '2016-08-27T17:48:32', true],
    [2, 'About Us', 'about', '2016-08-28T08:42:09', true],
    [4, 'Contact Us', 'contact', '2016-08-28T13:28:18', false],
  ];


  /** 14.6 */

  name = Promise.resolve('Misk');
  friends= new Observable<any>( observer => observer.next(['a','b','c']));


  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });



  /**14.8 */

  value:boolean=true

  /**14.8 */

  superDate: Date =  new Date();



  constructor() {}

  ngOnInit() {}
}
