import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { User } from '../../shared/user.model';
import { ApiService } from '../../api.service';
import { Observable, of, iif, defer } from 'rxjs';
import { Injectable } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import { switchMap, withLatestFrom, map, switchMapTo } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
  constructor(
    private store: Store<fromApp.AppState>,
    private apiService: ApiService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> | User {
    return this.store.pipe(
      select('auth'),
      map((authState) => authState.user),
      map((user) => {
        // if (route.paramMap.get('id') && +route.paramMap.get('id') === user.id) {
          return user;
        // } else {
        //   this.apiService.getUser(route.paramMap.get('id'));
        // }
      })
    );
  }
}
