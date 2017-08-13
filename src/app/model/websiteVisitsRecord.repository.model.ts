import { Injectable } from '@angular/core';
import { WebsiteVisitsRecord } from './websiteVisitsRecord.model';
import { WebsiteVisitsRecordDataSource } from './websiteVisitsRecord.datasource.model';

@Injectable()
export class WebsiteVisitsRecordRepository {

    private records: WebsiteVisitsRecord[] = [];
    private locator = (record: WebsiteVisitsRecord, id: string) => record.id === id;

    constructor(private datasource: WebsiteVisitsRecordDataSource) {
      console.log('Requesting records');
      this.datasource.getRecords()
      .subscribe(records => {
        console.log('Received records', records);
        this.records = records;
      });
    }

    getRecord(id: string): WebsiteVisitsRecord {
        return this.records.find(record => this.locator(record, id));
    }

    getRecords(): WebsiteVisitsRecord[] {
        return this.records;
    }

    saveRecord(record: WebsiteVisitsRecord) {
      if (!record.id) {
        // The record doesn't have an ID: this is a new record
        this.datasource.createRecord(record)
        .subscribe(newRecord => this.records.push(newRecord));
      } else {
        // The record has an ID: this is an existing record that needs to be updated
        this.datasource.updateRecord(record)
        .subscribe(updatedRecord => {
          const index = this.records.findIndex(existingRecord => this.locator(existingRecord, updatedRecord.id));
          this.records.splice(index, 1, updatedRecord);
        });
      }
    }

}
