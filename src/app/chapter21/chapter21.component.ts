import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren  } from '@angular/core';
import { EditDirective } from './directive/edit.directive';

@Component({
  selector: 'app-chapter21',
  templateUrl: './chapter21.component.html',
  styleUrls: ['./chapter21.component.css']
})
export class Chapter21Component implements OnInit {

  @ViewChildren(EditDirective) vc!: QueryList<EditDirective> ;
  @ViewChildren(ElementRef) elementRef!: QueryList<ElementRef>;

  hero: string | undefined;
  power: string | undefined;

  @ViewChild('elements')
  elements!:any
  e: any;

  constructor() {
  }


  Execute(click: any) {
    let event = click;
    let ele=this.elements;
    console.log(`Target : ${event.target.innerHTML}`);
    this.vc.map(c=>c.GetElements());



  }


  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    setTimeout(()=>{console.log(`Destroy`)},3000);
    console.log('ngOnDestroy');
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }


}
