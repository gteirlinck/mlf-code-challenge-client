import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WebsiteVisitsRecordComponent } from './websiteVisitsRecord.component';
import { WebsiteVisitsRecordDataSource } from './websiteVisitsRecord.datasource';
import { WebsiteVisitsRecordRestDataSource } from './websiteVisitsRecord.rest.datasource';
import { MlfAppHttpModule } from '../mlfAppHttp/mlfAppHttp.module';
import { AuthGuard } from '../auth/auth.guard';
import { AuthenticatedModule } from '../authenticated/authenticated.module';
import { HomeFirstGuard } from '../home/homeFirst.guard';
import { MlfAppHttpService } from '../mlfAppHttp/mlfAppHttp.service';

@NgModule({
  declarations: [WebsiteVisitsRecordComponent],
  imports: [AuthenticatedModule, BrowserModule, FormsModule, MlfAppHttpModule],
  exports: [],
  providers: [AuthGuard, HomeFirstGuard, MlfAppHttpService,
    { provide: WebsiteVisitsRecordDataSource, useClass: WebsiteVisitsRecordRestDataSource }
  ],
})
export class WebsiteVisitsRecordModule { }
