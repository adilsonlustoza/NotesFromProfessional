import { User } from './../chapter17/model/User';
import { Component, OnInit } from '@angular/core';
import { UserToken } from './model/UserToken';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter18',
  templateUrl: './chapter18.component.html',
  styleUrls: ['./chapter18.component.css'],
})
export class Chapter18Component implements OnInit {
  userCharpter18!: UserToken;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.userCharpter18 = data['currentUser'] as UserToken;
    });
  }
}
