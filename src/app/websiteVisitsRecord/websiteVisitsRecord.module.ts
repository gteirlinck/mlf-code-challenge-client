import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ExclusionsListModule } from '../exclusionsList/exclusionsList.module';
import { WebsiteVisitsRecordComponent } from './websiteVisitsRecord.component';
import { WebsiteVisitsRecordRepository } from './websiteVisitsRecord.repository';
import { WebsiteVisitsRecordDataSource } from './websiteVisitsRecord.datasource';
import { WebsiteVisitsRecordStaticDataSource } from './websiteVisitsRecord.static.datasource';
import { ExclusionsListRepository } from '../exclusionsList/exclusionsList.repository';

@NgModule({
  declarations: [WebsiteVisitsRecordComponent],
  imports: [BrowserModule, ExclusionsListModule, FormsModule],
  exports: [],
  providers: [
    ExclusionsListRepository,
    WebsiteVisitsRecordRepository,
    { provide: WebsiteVisitsRecordDataSource, useClass: WebsiteVisitsRecordStaticDataSource }
  ],
})
export class WebsiteVisitsRecordModule { }
