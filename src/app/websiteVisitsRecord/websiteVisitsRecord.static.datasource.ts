import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebsiteVisitsRecord } from './websiteVisitsRecord.model';
import { WebsiteVisitsRecordDataSource } from './websiteVisitsRecord.datasource';
import uuid from 'js-uuid';

/*
    This static datasoure will be used for development only.
    It contains a subset of all available records
    It will later be replaced by a REST datasource (websiteVisitsRecord.rest.datasource)
*/
@Injectable()
export class WebsiteVisitsRecordStaticDataSource implements WebsiteVisitsRecordDataSource {

  private data: WebsiteVisitsRecord[];
  private locator = (record: WebsiteVisitsRecord, id: string) => record.id === id;

  constructor() {
      this.data = new Array<WebsiteVisitsRecord>(
        new WebsiteVisitsRecord(String(uuid.v1()), new Date(2016, 0, 6), 'www.website-a', 14065457),
        new WebsiteVisitsRecord(String(uuid.v1()), new Date(2016, 0, 6), 'www.website-b', 19831166),
        new WebsiteVisitsRecord(String(uuid.v1()), new Date(2016, 0, 6), 'www.website-c', 104346720),
        new WebsiteVisitsRecord(String(uuid.v1()), new Date(2016, 0, 6), 'www.website-d', 21536612),
        new WebsiteVisitsRecord(String(uuid.v1()), new Date(2016, 0, 6), 'www.website-e', 13246531),
        new WebsiteVisitsRecord(String(uuid.v1()), new Date(2016, 0, 6), 'www.website-f', 29422150),
        new WebsiteVisitsRecord(String(uuid.v1()), new Date(2016, 0, 27), 'www.website-b', 23154653),
        new WebsiteVisitsRecord(String(uuid.v1()), new Date(2016, 0, 27), 'www.website-c', 123831275)
      );
  }

  getRecords(): Observable<WebsiteVisitsRecord[]> {
    return Observable.create(observer => {
      observer.next(this.data);
      observer.complete();
    });
  }

}
