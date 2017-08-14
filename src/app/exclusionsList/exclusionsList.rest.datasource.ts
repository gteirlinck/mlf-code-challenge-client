import { Inject, Injectable, OpaqueToken } from '@angular/core';
import { Headers, Http, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ExclusionListItem } from './exclusionsList.model';
import { ExclusionsListDataSource } from './exclusionsList.datasource';
import { MlfAppHttpService } from '../mlfAppHttp/mlfAppHttp.service';

@Injectable()
export class ExclusionsListRestDataSource implements ExclusionsListDataSource {

  constructor(
    private httpService: MlfAppHttpService
  ) { }

  getExclusionsList(): Observable<ExclusionListItem[]> {
    const path = 'exclusions';
    return this.httpService.get(path);
  }

}
