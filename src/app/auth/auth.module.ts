import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth.service';
import { AuthDataSource } from './auth.datasource';
import { AuthStaticDataSource } from './auth.static.datasource';

@NgModule({
  declarations: [AuthComponent],
  imports: [BrowserModule, FormsModule],
  exports: [],
  providers: [AuthService, { provide: AuthDataSource, useClass: AuthStaticDataSource}],
})
export class AuthModule { }
