import { Injectable } from '@angular/core';
import { AuthDataSource } from './auth.datasource';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';

/*
    This static datasoure will be used for development only.
    It contains a subset of all available records
    It will later be replaced by a REST datasource (auth.rest.datasource)
*/
@Injectable()
export class AuthStaticDataSource implements AuthDataSource {

  authenticate(user: User): Observable<string> {
    return Observable.create(observer => {
      if (user.username === 'test_user' && user.password === 'password') {
        observer.next('faketoken');
      } else {
        observer.next(null);
      }

      observer.complete();
    });
  }

}
