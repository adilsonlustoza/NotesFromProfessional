import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter17_2',
  templateUrl: './chapter17_2.component.html',
  styleUrls: ['./chapter17_2.component.css']
})
export class Chapter17_2Component implements OnInit {

  public id: string | null | undefined

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
