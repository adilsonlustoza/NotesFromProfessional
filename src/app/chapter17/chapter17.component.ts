import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './model/User';
import { map, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter17',
  templateUrl: './chapter17.component.html',
  styleUrls: ['./chapter17.component.css'],
})
export class Chapter17Component implements OnInit {

  users: User[]=[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.users = data["user"] as User[];
    });

  }
}
