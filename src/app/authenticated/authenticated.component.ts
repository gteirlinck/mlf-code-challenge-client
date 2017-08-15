import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-mlf-authenticated',
  templateUrl: './authenticated.component.html'
})
export class AuthenticatedComponent {

  constructor(
    private authService: AuthService
  ) { }

  get authenticated(): boolean {
    return this.authService.authenticated;
  }

  logout(): void {
    this.authService.logout();
  }

}
