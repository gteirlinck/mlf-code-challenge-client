import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth.service';
import { CallbackComponent } from './callback.component';

@NgModule({
  declarations: [CallbackComponent],
  imports: [BrowserModule, FormsModule],
  exports: [CallbackComponent],
  providers: [AuthService],
})
export class AuthModule { }
