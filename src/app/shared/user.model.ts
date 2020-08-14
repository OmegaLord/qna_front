import { Role } from './role';
import { Profile } from './profile.model';

export interface User {
  id: number;
  email: string;
  role: Role;
  profile: Profile;
}
