import { Observable } from 'rxjs/Observable';
import { WebsiteVisitsRecord } from './websiteVisitsRecord.model';

type GetRecordsFunc = (date: string, maxVisitsCount: number) => Observable<WebsiteVisitsRecord[]>;
type GetValidDatesFunc = () => Observable<string[]>;

export abstract class WebsiteVisitsRecordDataSource {

  getRecords: GetRecordsFunc;
  getValidDates: GetValidDatesFunc;

}
