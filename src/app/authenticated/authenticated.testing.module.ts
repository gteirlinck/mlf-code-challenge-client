import { NgModule } from '@angular/core';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { AuthenticatedComponent } from './authenticated.component';
import { BrowserModule } from '@angular/platform-browser';

const mockAuthService = {
  authenticated: true,
  logout: function () {}
};

@NgModule({
  declarations: [AuthenticatedComponent],
  imports: [BrowserModule],
  exports: [AuthenticatedComponent],
  providers: [{ provide: AuthService, useValue: mockAuthService }],
})
export class AuthenticatedTestingModule { }
