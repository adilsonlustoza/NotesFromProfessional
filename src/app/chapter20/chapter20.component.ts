import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-chapter20',
  templateUrl: './chapter20.component.html',
  styleUrls: ['./chapter20.component.css']
})
export class Chapter20Component implements OnInit {
  name = 'Jquery Integration With Angular!';
  isJqueryWorking: any;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    $(document).ready(() => {
      this.isJqueryWorking = 'Jquery is working !!!';
      let value = $('#content').html();
      console.log(`Content ${value}`);
    });

  }

}
