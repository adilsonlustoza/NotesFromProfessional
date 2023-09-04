import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable()
export class UserService {
  static posts: string = 'https://jsonplaceholder.typicode.com/posts';
  static postsWith: string = 'https://jsonplaceholder.typicode.com/posts/';

  user: User[] = [];

  constructor(public http: HttpClient) { }

  public index(): Observable<User[]> {
    return this.http.get<User[]>(UserService.posts);
  }

  public get(id: number | string): Observable<User>  {

    var result = this.http.get<User>(UserService.postsWith + id);
    if (result)
      result.subscribe((p) => { this.user.push(p) });

    return result;
  }
}
