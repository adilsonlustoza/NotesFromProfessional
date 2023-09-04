import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AdItem } from './model/AdItem';
import { AdDirective } from './ad.directive';
import { AdComponent } from './interfaces/AdComponent';
import { AdService } from './service/ad.service';

@Component({
  selector: 'app-chapter19',
  templateUrl: './chapter19.component.html',
  styleUrls: ['./chapter19.component.css']
})
export class Chapter19Component implements OnInit {

  ads: AdItem[] = [];

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  private clearTimer: VoidFunction | undefined;

  currentAdIndex = -1;

  constructor(private service: AdService) {
    this.ads = this.service.getAds();
  }

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }


  loadComponent() {

   // this.currentAdIndex= this.currentAdIndex==0?1:0;
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
    componentRef.instance.data = adItem.data;
    console.log(this.currentAdIndex + '  ' + adItem.component.toString())
  }



  getAds() {
    const interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
    this.clearTimer = () => clearInterval(interval);
  }

  ngOnDestroy() {
    this.clearTimer?.();
  }

}
