import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { UserToken } from '../model/UserToken';
import { AuthService } from './auth.service';

export const CurrentResolve : ResolveFn<UserToken> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthService).user;
}
