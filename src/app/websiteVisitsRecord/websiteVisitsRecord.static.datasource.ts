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

  createRecord(record: WebsiteVisitsRecord): Observable<WebsiteVisitsRecord> {
    return Observable.create(observer => {

      // Assign random string ID to the record
      record.id = String(uuid.v1());

      // Add record to the records array
      this.data.push(record);

      observer.next(record);
      observer.complete();
    });
  }

  deleteRecord(id: string): Observable<boolean> {
    return Observable.create(observer => {
      const index = this.data.findIndex(record => this.locator(record, id));

      if (index > -1) {
        this.data.splice(index, 1);
        observer.next(true);
      } else {
        observer.next(false);
      }

      observer.complete();
    });
  }

  getRecords(): Observable<WebsiteVisitsRecord[]> {
    return Observable.create(observer => {
      observer.next(this.data);
      observer.complete();
    });
  }

  updateRecord(record: WebsiteVisitsRecord): Observable<WebsiteVisitsRecord> {
    return Observable.create(observer => {
      // Locate the existing record in the array and replace it with the updated record
      const index = this.data.findIndex(existingRecord => this.locator(existingRecord, record.id));
      if (index > -1) {
        this.data.splice(index, 1, record);
      }

      observer.next(record);
      observer.complete();
    });
  }

}
