import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebsiteVisitsRecordModule } from './websiteVisitsRecord/websiteVisitsRecord.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, routing, WebsiteVisitsRecordModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
