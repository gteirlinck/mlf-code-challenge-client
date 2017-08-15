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

  get authenticated(): boolean {
    return this.authService.authenticated;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
