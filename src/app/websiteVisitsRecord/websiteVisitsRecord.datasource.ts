import { Observable } from 'rxjs/Observable';
import { WebsiteVisitsRecord } from './websiteVisitsRecord.model';

type GetRecordsFunc = () => Observable<WebsiteVisitsRecord[]>;

export abstract class WebsiteVisitsRecordDataSource {

  getRecords: GetRecordsFunc;

}
