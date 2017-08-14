import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebsiteVisitsRecordModule } from './websiteVisitsRecord/websiteVisitsRecord.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [AuthModule, BrowserModule, HomeModule, routing, WebsiteVisitsRecordModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
