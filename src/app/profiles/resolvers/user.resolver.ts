import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { User, UserResolved } from '../../shared/user.model';
import { ApiService } from '../../api.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import { take, pluck, exhaustMap, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<UserResolved> {
  constructor(
    private store: Store<fromApp.AppState>,
    private apiService: ApiService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): UserResolved | Observable<UserResolved> | Promise<UserResolved> {
    return this.store.pipe(
      select('auth'),
      pluck('user'),
      take(1),
      exhaustMap((user) => {
        return route.paramMap.get('id') && +route.paramMap.get('id') !== user.id
          ? of({ user: this.apiService.getUser(route.paramMap.get('id')) })
          : of({ user: user });
      }),
      catchError((error) => {
        return of(error);
      })
    );
  }
}
