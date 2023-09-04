import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter10_1',
  templateUrl: './chapter10_1_component.html',
  styleUrls: ['./chapter10_1_component.css'],
})
export class Chapter10_1_Component implements OnInit {

  items: Array<any> = new Array<any>(
    { id: 1, name: 'aaa', price: 10 },
    { id: 2, name: 'bbb', price: 15 },
    { id: 3, name: 'ccc', price:21 },
  );

  loading: boolean = false;


  anyfunction() {
    //window.alert(this.csvdata.length);
  }

  constructor() {}

  ngOnInit() {
    this.loading = true;

    setInterval(() => {
      this.loading = false;
    }, 5000);
  }

  ngOnChanges(): void {
    this.loading = true;
  }
}
