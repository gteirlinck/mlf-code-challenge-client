import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { AUTH0_CONFIG } from './auth0.config';
import 'rxjs/add/operator/map';

declare var auth0: any;

@Injectable()
export class AuthService {

  // Create Auth0 web auth instance
  auth0 = new auth0.WebAuth({
    clientID: AUTH0_CONFIG.clientId,
    domain: AUTH0_CONFIG.clientDomain
  });

  // Create a stream of logged in status to communicate throughout app
  private loggedIn = false;

  constructor(
    private router: Router
  ) {
    // If authenticated, set local profile property and update login status subject
    if (tokenNotExpired('token')) {
      this.loggedIn = true;
    }
  }

  login() {
    // Auth0 authorize request
    // Note: nonce is automatically generated: https://auth0.com/docs/libraries/auth0js/v8#using-nonce
    this.auth0.authorize({
      responseType: 'token id_token',
      redirectUri: AUTH0_CONFIG.redirect,
      audience: AUTH0_CONFIG.audience,
      scope: AUTH0_CONFIG.scope
    });
  }

  handleAuth() {
    // When Auth0 hash parsed, get profile
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSessionAndContinueNavigation(authResult);
      } else if (err) {
        this.router.navigateByUrl('/');
        console.error(`Error: ${err.error}`);
      }
    });
  }

  private setSessionAndContinueNavigation(authResult: any) {
    // Use access token to retrieve user's profile and set session
    this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      // Save session data and update login status subject
      localStorage.setItem('token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('profile', JSON.stringify(profile));

      this.loggedIn = true;

      this.router.navigateByUrl('/visits');
    });
  }

  logout(): void {
    // Remove tokens and profile, update login status subject
    localStorage.removeItem('token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');

    this.router.navigate(['/']);
    this.loggedIn = false;
  }

  get authenticated(): boolean {
    return this.loggedIn;
  }

  get accessToken(): string {
    return localStorage.getItem('token');
  }

}
