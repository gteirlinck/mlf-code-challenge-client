import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-mlf-authenticated',
  moduleId: module.id,
  template: '<button *ngIf="authenticated" class="btn btn-secondary btn-sm" (click)="logout()">Logout</button>'
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
