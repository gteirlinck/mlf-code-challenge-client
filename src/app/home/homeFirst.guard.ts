import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HomeComponent } from './home.component';

@Injectable()
export class HomeFirstGuard implements CanActivate {

  private isFirstNavigation = true;

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isFirstNavigation) {
      this.isFirstNavigation = false;

      if (route.component !== HomeComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }

    return true;
  }

  // We need a setter to put the flag to false in the login callback
  cancelIsFirstNavigationFlag() {
    this.isFirstNavigation = false;
  }

}
