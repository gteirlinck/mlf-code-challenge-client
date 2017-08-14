import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-mlf-home',
  moduleId: module.id,
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  get username(): string {
    return this.authService.username;
  }

  get authenticated(): boolean {
    return this.authService.authenticated;
  }

  enter() {
    this.router.navigateByUrl('/visits');
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  logout() {
    this.authService.logout();
  }
}
