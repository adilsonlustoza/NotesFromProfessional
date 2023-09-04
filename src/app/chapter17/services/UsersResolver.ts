import { inject } from '@angular/core';
import {
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from './user.service';
import { User } from '../model/User';

export const UserResolver: ResolveFn<User[] | User> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const paramValue: any = route.paramMap.get('id');

  if (paramValue && paramValue!=='0')
      return inject(UserService).get(paramValue);

  else return inject(UserService).index();
};
