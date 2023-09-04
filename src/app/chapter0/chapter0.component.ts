import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DataService } from './service/data.service';
import { DataContent } from './model/dataContent';
import { dataInterface } from './model/dataInterface';

@Component({
  selector: 'app-chapter0',
  templateUrl: './chapter0.component.html',
  styleUrls: ['./chapter0.component.css']
})
export class Chapter0Component implements OnInit {

  dataContentArray: Array<DataContent> = [];
  cont: number = 0;

  @ViewChild('content', { read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.loadComponent();
  }
  loadData() {
    this.dataContentArray = this.service.getData();
  }

  loadComponent() {
    const comp = this.dataContentArray.at(this.cont);
    this.viewContainerRef?.clear();
    const componentRef = this.viewContainerRef.createComponent<dataInterface>(comp?.component);
    componentRef.instance.data = comp?.data
    this.cont = this.cont == 0 ? 1 : 0;
  }

}
