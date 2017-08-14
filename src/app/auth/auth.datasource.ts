import { User } from './user.model';
import { Observable } from 'rxjs/Observable';

type AuthenticateFunc = (user: User) => Observable<string>;

export abstract class AuthDataSource {

  authenticate: AuthenticateFunc;

}
