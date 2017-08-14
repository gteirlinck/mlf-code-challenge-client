import { Injectable } from '@angular/core';
import { ExclusionListItem } from './exclusionsList.model';
import { ExclusionsListDataSource } from './exclusionsList.datasource';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExclusionsListRepository {

  private exclusionsList: ExclusionListItem[] = [];

  constructor(private datasource: ExclusionsListDataSource) { }

  getExclusionsList(): Observable<ExclusionListItem[]> {
    return Observable.create(observer => {
      if (this.exclusionsList.length > 0) {
        observer.next(this.exclusionsList);
        observer.complete();
      } else {
        this.datasource.getExclusionsList()
        .subscribe(list => {
          this.exclusionsList = list
          .map(item => new ExclusionListItem(
            item.host, new Date(item.excludedSince), item.excludedTill ? new Date(item.excludedTill) : null)
          );

          observer.next(this.exclusionsList);
          observer.complete();
        });
      }
    });
  }

}
