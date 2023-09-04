import { Injectable } from '@angular/core';
import { dataModel } from '../model/dataModel';
import { DataContent } from '../model/dataContent';
import { Chapter0_1Component } from '../chapter0_1/chapter0_1.component';
import { Chapter0_2Component } from '../chapter0_2/chapter0_2.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  public getData(): Array<DataContent> {

    return [
      new DataContent(Chapter0_1Component, new dataModel(1, 'Adilson')),
      new DataContent(Chapter0_2Component, new dataModel(2, 'Luciana'))
    ];

  }

}
