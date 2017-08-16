import { Component } from '@angular/core';
import { WebsiteVisitsRecord } from './websiteVisitsRecord.model';
import { WebsiteVisitsRecordDataSource } from './websiteVisitsRecord.datasource';

@Component({
  selector: 'app-website-visits-record',
  templateUrl: './websiteVisitsRecord.component.html',
})
export class WebsiteVisitsRecordComponent {

  validDates: string[] = [];
  maxRecordsCount = 5;

  records: WebsiteVisitsRecord[] = [];
  selectedDate: string = null;

  constructor(private dataSource: WebsiteVisitsRecordDataSource) {
    this.dataSource.getValidDates()
    .subscribe(validDates => this.validDates = validDates);

    this.queryRecords();
  }

  selectedChanged() {
    this.queryRecords();
  }

  get dateSelected() {
    return this.selectedDate && this.selectedDate.length > 0;
  }

  private queryRecords() {
    this.dataSource.getRecords(this.selectedDate, this.maxRecordsCount)
    .subscribe(records => this.records = records);
  }
}
