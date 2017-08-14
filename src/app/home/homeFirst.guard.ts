import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HomeComponent } from './home.component';

@Injectable()
export class HomeFirstGuard implements CanActivate {

  private firstNavigation = true;

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;

      if (route.component !== HomeComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }

    return true;
  }

}
