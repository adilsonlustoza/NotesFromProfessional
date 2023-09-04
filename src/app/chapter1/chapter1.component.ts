import { Component, ElementRef, Injector, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.css']
})
export class Chapter1Component implements OnInit {

  @ViewChild('viewContainerRef', { read: ViewContainerRef, static: true })
  viewContainerRef!: ViewContainerRef;

  @ViewChild('templateRef', { read: TemplateRef, static: true })
  templateRef!: TemplateRef<any>;


  @ViewChild('divElement', { read: ElementRef, static: true })
  divElement!: ElementRef<any>;


  allStudents = [
    { name: 'Mohit', age: 25 },
    { name: 'Krishn', age: 30 }
  ];

  constructor() { }

  value:string='Adilson'

  ngAfterViewInit(): void {
    this.divElement.nativeElement.innerHTML=`
     <p>Name : ${this.value}</p>
    `;

  }

  ngOnInit() {

    this.viewContainerRef.createEmbeddedView(
      this.templateRef,
      { bookName: 'Ramayan', writer: 'Valmiki', $implicit: 'Prayag' },
      {
        index: 0,
        injector: Injector.create({
          providers: [{ provide: 'students', useValue: this.allStudents }]
        })
      });


  }

}
