import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserToken } from '../model/UserToken';

@Component({
  selector: 'app-chapter18_2',
  templateUrl: './chapter18_2.component.html',
  styleUrls: ['./chapter18_2.component.css']
})
export class Chapter18_2Component implements OnInit {
  userCharpter18!: UserToken;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.userCharpter18 = data['currentUser'] as UserToken;
    });
  }

}
