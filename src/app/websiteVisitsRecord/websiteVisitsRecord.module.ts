import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ExclusionsListModule } from '../exclusionsList/exclusionsList.module';
import { WebsiteVisitsRecordComponent } from './websiteVisitsRecord.component';
import { WebsiteVisitsRecordRepository } from './websiteVisitsRecord.repository';
import { WebsiteVisitsRecordDataSource } from './websiteVisitsRecord.datasource';
import { WebsiteVisitsRecordRestDataSource } from './websiteVisitsRecord.rest.datasource';
import { ExclusionsListRepository } from '../exclusionsList/exclusionsList.repository';
import { MlfAppHttpModule } from '../mlfAppHttp/mlfAppHttp.module';
import { AuthGuard } from '../auth/auth.guard';
import { AuthenticatedModule } from '../authenticated/authenticated.module';
import { HomeFirstGuard } from '../home/homeFirst.guard';

@NgModule({
  declarations: [WebsiteVisitsRecordComponent],
  imports: [AuthenticatedModule, BrowserModule, ExclusionsListModule, FormsModule, MlfAppHttpModule],
  exports: [],
  providers: [
    AuthGuard,
    ExclusionsListRepository,
    HomeFirstGuard,
    WebsiteVisitsRecordRepository,
    { provide: WebsiteVisitsRecordDataSource, useClass: WebsiteVisitsRecordRestDataSource }
  ],
})
export class WebsiteVisitsRecordModule { }
