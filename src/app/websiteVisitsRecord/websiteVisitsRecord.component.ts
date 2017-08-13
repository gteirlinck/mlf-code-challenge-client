import { Component } from '@angular/core';
import { WebsiteVisitsRecord } from './websiteVisitsRecord.model';
import { WebsiteVisitsRecordRepository } from './websiteVisitsRecord.repository';

const MAX_RECORDS_TO_SHOW = 5;

@Component({
  selector: 'app-website-visits-record',
  templateUrl: './websiteVisitsRecord.component.html',
})
export class WebsiteVisitsRecordComponent {

  dateStr: string = null;

  private recordDateFilter = (record): boolean => this.dateStr == null || record.date.getDate() === (new Date(this.dateStr)).getDate();

  private recordDescendingSort = (record1, record2): number => {
    if (record1.visitsCount < record2.visitsCount) {
      return 1;
    } else if (record1.visitsCount > record2.visitsCount) {
      return -1;
    } else {
      return 0;
    }
  }

  constructor(private recordsRepository: WebsiteVisitsRecordRepository) {}

  public get records(): WebsiteVisitsRecord[] {
    return this.recordsRepository.getRecords()
    .filter(this.recordDateFilter)
    .sort(this.recordDescendingSort)
    .slice(0, MAX_RECORDS_TO_SHOW);
  }

}
