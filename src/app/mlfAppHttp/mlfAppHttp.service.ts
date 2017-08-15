import { Inject, Injectable, OpaqueToken } from '@angular/core';
import { Headers, Http, Request, RequestMethod, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ExclusionListItem } from '../exclusionsList/exclusionsList.model';
import { WebsiteVisitsRecord } from '../websiteVisitsRecord/websiteVisitsRecord.model';
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export const REST_URL = new OpaqueToken('rest_url');

@Injectable()
export class MlfAppHttpService {

  constructor(
    private http: Http,
    @Inject(REST_URL)
    private url: string,
    private authService: AuthService
  ) {}

  getExclusions(): Observable<ExclusionListItem[]> {
    return this.http
    .get(`${this.url}/exclusions`, this.createRequestOptions())
    .map(response => response.json())
    .catch((error: Response) => Observable.throw(`Network Error: ${error.statusText} (${error.status})`));
  }

  getVisitRecords(): Observable<WebsiteVisitsRecord[]> {
    return this.http
    .get(`${this.url}/records`, this.createRequestOptions())
    .map(response => response.json())
    .catch((error: Response) => Observable.throw(`Network Error: ${error.statusText} (${error.status})`));
  }

  private createRequestOptions() {
    // All API routes are JWT-protected: we need to retrieve the access token managed by the AuthService
    // (we could also query localStorage.getItem('token') directly, but accessing it through the AuthService is more respectful of the separation of concerns principle)
    const headers = new Headers({
      'Authorization': `Bearer ${this.authService.accessToken}`
    });

    return new RequestOptions({ headers: headers });
  }

}
