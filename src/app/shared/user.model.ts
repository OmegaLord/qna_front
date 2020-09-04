import { Role } from './role';
import { Profile } from './profile.model';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  email: string;
  role: Role;
  profile: Profile;
}

export interface UserResolved {
  user: User | Observable<User>;
  error?: any;
}
