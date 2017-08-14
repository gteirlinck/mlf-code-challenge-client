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

  createRecord(record: WebsiteVisitsRecord): Observable<WebsiteVisitsRecord> {
    const path = 'records';
    return this.httpService.post(path, record);
  }

  deleteRecord(id: string): Observable<boolean> {
    const path = `records/${id}`;
    return this.httpService.delete(path);
  }

  getRecords(): Observable<WebsiteVisitsRecord[]> {
    const path = 'records';
    return this.httpService.get(path);
  }

  updateRecord(record: WebsiteVisitsRecord): Observable<WebsiteVisitsRecord> {
    const path = `records/${record.id}`;
    return this.httpService.put(path, record);
  }

}
