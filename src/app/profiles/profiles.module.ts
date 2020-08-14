import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { ProfilesRoutingModule } from './profiles-routing.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [ProfilesRoutingModule, SharedModule],
})
export class ProfilesModule {}
