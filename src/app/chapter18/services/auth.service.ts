import { Injectable, inject } from '@angular/core';
import { UserToken } from '../model/UserToken';

export @Injectable({
  providedIn: 'root'
})
class AuthService {

  user: UserToken ;

  constructor() {
    this.user = inject(UserToken).getInstance();
  }

  fetchCurrentUser(): boolean {
    return this.user===null?false:true;
  }






}

