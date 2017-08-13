import { Injectable } from '@angular/core';
import { ExclusionListItem } from './exclusionsList.model';
import { ExclusionsListDataSource } from './exclusionsList.datasource';

@Injectable()
export class ExclusionsListRepository {

  private exclusionsList: ExclusionListItem[];

  constructor(private datasource: ExclusionsListDataSource) {
    this.datasource.getExclusionsList()
    .subscribe(list => this.exclusionsList = list);
  }

  getExclusionsList(): ExclusionListItem[] {
    return this.exclusionsList;
  }

  isWebsiteExcluded(website: string, date: Date) {
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
