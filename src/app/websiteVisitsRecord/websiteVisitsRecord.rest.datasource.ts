import { Injectable } from '@angular/core';
import { WebsiteVisitsRecordDataSource } from './websiteVisitsRecord.datasource';
import { MlfAppHttpService } from '../mlfAppHttp/mlfAppHttp.service';
import { WebsiteVisitsRecord } from './websiteVisitsRecord.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WebsiteVisitsRecordRestDataSource implements WebsiteVisitsRecordDataSource {

  constructor(
    private httpService: MlfAppHttpService
  ) { }

  getRecords(): Observable<WebsiteVisitsRecord[]> {
    return this.httpService.getVisitRecords();
  }

}
