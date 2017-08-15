import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { HomeFirstGuard } from '../home/homeFirst.guard';

@Component({
  template: ''
})
export class CallbackComponent {

  constructor(
    private authService: AuthService,
    private homeFirstGuard: HomeFirstGuard
  ) {
    // The HomeFirst guard prevents direct navigation to the WebsiteVisitsRecords component
    // We need to disable this behavior after a successfull login
    this.homeFirstGuard.cancelIsFirstNavigationFlag();

    this.authService.handleAuth();
  }
}
