import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';
import { AuthDataSource } from './auth.datasource';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

const STORAGE_KEY = 'currentUser';

@Injectable()
export class AuthService {

  private _authToken: string = null;
  public _username: string = null;

  constructor(
    private datasource: AuthDataSource,
    private router: Router
  ) { }

  authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(new User(username, password))
    .map(authToken => {
      if (authToken) {
        this._username = username;
        this._authToken = authToken;
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ username: this._username, authToken: this._authToken }));
        return true;
      } else {
        return false;
      }
    });
  }

  logout(): void {
    // Clear token and remove user from local storage to log user out
    this._authToken = null;
    this._username = null;
    localStorage.removeItem(STORAGE_KEY);

    this.router.navigateByUrl('/');
  }

  get authenticated(): boolean {
    if (this._authToken && this._username) {
      // auth token and username are set: we are already authenticated
      return true;
    } else {
      const curUserFromStorage = localStorage.getItem(STORAGE_KEY);

      if (curUserFromStorage) {
        // current user data found in local storage: we are already authenticated
        const curUserFromStorageObj = JSON.parse(curUserFromStorage);
        this._authToken = curUserFromStorageObj.authToken;
        this._username = curUserFromStorageObj.username;

        return true;
      }
    }

    return false;
  }

  get username() {
    return this._username;
  }

  get authToken() {
    return this._authToken;
  }

}
