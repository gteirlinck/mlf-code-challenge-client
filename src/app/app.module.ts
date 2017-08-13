import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebsiteVisitsRecordModule } from './model/websiteVisitsRecord.model.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, WebsiteVisitsRecordModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
