import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserToken } from '../model/UserToken';

@Component({
  selector: 'app-chapter18_1',
  templateUrl: './chapter18_1.component.html',
  styleUrls: ['./chapter18_1.component.css'],
})
export class Chapter18_1Component implements OnInit {


  userCharpter18!: UserToken;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.userCharpter18 = data['currentUser'] as UserToken;
    });
  }
}
