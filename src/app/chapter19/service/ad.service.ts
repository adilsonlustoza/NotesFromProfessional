import { Chapter19_2Component } from '../chapter19_2/chapter19_2.component';
import { Chapter19_3Component } from '../chapter19_3/chapter19_3.component';
import { AdItem } from '../model/AdItem';
import { Chapter19_1Component } from './../chapter19_1/chapter19_1.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }

  getAds() {
    return [
      new AdItem(
        Chapter19_1Component,
        { aaa1: 'Bombasto', aaa2: 'Brave as they come' }
      ),
      new AdItem(
        Chapter19_2Component,
        { bbb1: 'Dr. IQ', bbb2: 'Smart as they come' }
      ),

      new AdItem(
        Chapter19_3Component,
        { ccc1: 'Dr. Gaki', ccc3: 'So hard as they come' }
      ),

    ];
  }




}
