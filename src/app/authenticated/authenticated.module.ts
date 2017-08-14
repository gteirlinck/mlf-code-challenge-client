import { NgModule } from '@angular/core';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { AuthenticatedComponent } from './authenticated.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AuthenticatedComponent],
  imports: [AuthModule, BrowserModule],
  exports: [AuthenticatedComponent],
  providers: [],
})
export class AuthenticatedModule { }
