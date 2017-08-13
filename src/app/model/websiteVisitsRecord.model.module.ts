import { NgModule, enableProdMode } from '@angular/core';
import { WebsiteVisitsRecordRepository } from './websiteVisitsRecord.repository.model';
import { WebsiteVisitsRecordDataSource } from './websiteVisitsRecord.datasource.model';
import { WebsiteVisitsRecordStaticDataSource } from './websiteVisitsRecord.static.datasource.model';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [WebsiteVisitsRecordRepository, { provide: WebsiteVisitsRecordDataSource, useClass: WebsiteVisitsRecordStaticDataSource }],
})
export class WebsiteVisitsRecordModule { }
