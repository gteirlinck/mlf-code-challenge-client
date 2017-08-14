import { Inject, Injectable, OpaqueToken } from '@angular/core';
import { Headers, Http, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ExclusionListItem } from '../exclusionsList/exclusionsList.model';
import { WebsiteVisitsRecord } from '../websiteVisitsRecord/websiteVisitsRecord.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from '../auth/user.model';

export const REST_URL = new OpaqueToken('rest_url');

@Injectable()
export class MlfAppHttpService {

  constructor(
    private http: Http,
    @Inject(REST_URL)
    private url: string
  ) {}

  get(path: string): Observable<any> {
      return this.sendRequest(RequestMethod.Get, path);
  }

  post(path: string, body: ExclusionListItem | WebsiteVisitsRecord | User): any {
    return this.sendRequest(RequestMethod.Post, path, body);
  }

  put(path: string, body: ExclusionListItem | WebsiteVisitsRecord): any {
    return this.sendRequest(RequestMethod.Put, path, body);
  }

  delete(path: string): any {
    return this.sendRequest(RequestMethod.Delete, path);
  }

  private sendRequest(verb: RequestMethod, path: string, body?: ExclusionListItem | WebsiteVisitsRecord | User): any {
    const headers = new Headers();
    headers.set('Application-Name', 'mlfApp');

    return this.http.request(new Request({
          method: verb,
          url: `${this.url}/${path}`,
          body: body,
          headers: headers
      }))
      .map(response => response.json())
      .catch((error: Response) => Observable.throw(`Network Error: ${error.statusText} (${error.status})`));
    }
}
