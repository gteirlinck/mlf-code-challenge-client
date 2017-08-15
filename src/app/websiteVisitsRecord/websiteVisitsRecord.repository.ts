import { Injectable } from '@angular/core';
import { ExclusionListItem } from '../exclusionsList/exclusionsList.model';
import { ExclusionsListRepository } from '../exclusionsList/exclusionsList.repository';
import { WebsiteVisitsRecord } from './websiteVisitsRecord.model';
import { WebsiteVisitsRecordDataSource } from './websiteVisitsRecord.datasource';
import { ExclusionsListDataSource } from '../exclusionsList/exclusionsList.datasource';

@Injectable()
export class WebsiteVisitsRecordRepository {

    private records: WebsiteVisitsRecord[] = [];
    private exclusionsList: ExclusionListItem[] = [];
    private locator = (record: WebsiteVisitsRecord, id: string) => record.id === id;

    constructor(private datasource: WebsiteVisitsRecordDataSource, private exclusionsListRepository: ExclusionsListRepository) {
      // Load websites visit records
      this.datasource.getRecords()
      .subscribe(records => {
        // Load exclusions list
        this.exclusionsListRepository.getExclusionsList()
        .subscribe(exclusionsList => {
          this.exclusionsList = exclusionsList;

          // Filter out excluded items
          this.records = records
          .filter(record => !this.isWebsiteExcluded(record.website, record.date));
        });
      });
    }

    getRecord(id: string): WebsiteVisitsRecord {
        return this.records.find(record => this.locator(record, id));
    }

    getRecords(): WebsiteVisitsRecord[] {
        return this.records;
    }

  private isWebsiteExcluded(website: string, date: Date): boolean {
    return this.exclusionsList.findIndex(item => {
      // Filter host name
      if (!website.toLowerCase().endsWith(item.host.toLowerCase())) {
        return false;
      }

      // Filter excluded date range lower bound
      if (date < item.excludedSince) {
        return false;
      }

      // Filter excluded date range upper bound (id any)
      if (item.excludedTill && date > item.excludedTill) {
        return false;
      }

      return true;
    }) > -1;
  }

}
