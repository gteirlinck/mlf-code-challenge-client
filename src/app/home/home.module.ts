import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, RouterModule],
  exports: [HomeComponent],
  providers: [],
})
export class HomeModule { }
