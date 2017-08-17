import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebsiteVisitsRecord } from './websiteVisitsRecord.model';
import { WebsiteVisitsRecordDataSource } from './websiteVisitsRecord.datasource';

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
        new WebsiteVisitsRecord('a', new Date(2016, 0, 6), 'www.website-a', 14065457),
        new WebsiteVisitsRecord('b', new Date(2016, 0, 6), 'www.website-b', 19831166),
        new WebsiteVisitsRecord('c', new Date(2016, 0, 6), 'www.website-c', 104346720),
        new WebsiteVisitsRecord('d', new Date(2016, 0, 6), 'www.website-d', 21536612),
        new WebsiteVisitsRecord('e', new Date(2016, 0, 6), 'www.website-e', 13246531),
        new WebsiteVisitsRecord('f', new Date(2016, 0, 6), 'www.website-f', 29422150),
        new WebsiteVisitsRecord('g', new Date(2016, 0, 27), 'www.website-b', 23154653),
        new WebsiteVisitsRecord('h', new Date(2016, 0, 27), 'www.website-c', 123831275)
      );
  }

  getRecords(): Observable<WebsiteVisitsRecord[]> {
    return Observable.create(observer => {
      observer.next(this.data);
      observer.complete();
    });
  }

  getValidDates(): Observable<string[]> {
    return Observable.create(observer => {
      observer.next(['2016-01-27', '2016-01-06']);
      observer.complete();
    });
  }

}
