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

  get username(): string {
    return this.authService.username;
  }

  logout(): void {
    this.authService.logout();
  }

}
