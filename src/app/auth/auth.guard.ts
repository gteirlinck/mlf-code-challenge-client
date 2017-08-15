import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(): boolean {
    if (!this.authService.authenticated) {
      this.router.navigateByUrl('/');
      return false;
    } else {
      return true;
    }
  }

}
