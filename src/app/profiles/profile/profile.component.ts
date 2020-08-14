import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import { User } from 'src/app/shared/user.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private store: Store<fromApp.AppState>) {}

  getUrl() {
    return `${environment.apiUrl}${this.user.profile.avatar}`
  }

  ngOnInit(): void {
    this.store.pipe(select('auth')).subscribe((authState) => {
      this.user = authState.user;
    });
  }
}
