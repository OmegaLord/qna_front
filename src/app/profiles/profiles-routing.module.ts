import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const profilesRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
  {
    path: ':id',
    component: ProfileComponent,
    data: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(profilesRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class ProfilesRoutingModule {}
