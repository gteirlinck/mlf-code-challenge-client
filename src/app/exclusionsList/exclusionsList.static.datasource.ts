import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ExclusionListItem } from './exclusionsList.model';
import { ExclusionsListDataSource } from './exclusionsList.datasource';

/*
    This static datasoure will be used for development only.
    It contains a subset of all available records
    It will later be replaced by a REST datasource (exclusionsList.rest.datasource)
*/
@Injectable()
export class ExclusionsListStaticDataSource implements ExclusionsListDataSource {

  private data: ExclusionListItem[];

  constructor() {
    this.data = new Array<ExclusionListItem>(
      new ExclusionListItem('website-c', new Date(2016, 11, 1)),
      new ExclusionListItem('website-f', new Date(2016, 0, 1), new Date(2016, 2, 14)),
    );
  }

  getExclusionsList(): Observable<ExclusionListItem[]> {
    return Observable.create(observer => {
      observer.next(this.data);
      observer.complete();
    });
  }

}
