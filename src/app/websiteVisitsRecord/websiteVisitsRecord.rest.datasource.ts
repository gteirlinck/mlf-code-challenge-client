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

  getRecords(date: string, maxVisitsCount: number): Observable<WebsiteVisitsRecord[]> {
    return this.httpService.getVisitRecords(date, maxVisitsCount);
  }

  getValidDates(): Observable<string[]> {
    return this.httpService.getValidDates();
  }

}
