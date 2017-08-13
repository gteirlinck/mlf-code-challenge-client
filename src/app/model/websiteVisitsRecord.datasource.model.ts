import { Observable } from 'rxjs/Observable';
import { WebsiteVisitsRecord } from './websiteVisitsRecord.model';

type CreateRecordFunc = (record: WebsiteVisitsRecord) => Observable<WebsiteVisitsRecord>;
type DeleteRecordFunc = (id: string) => Observable<boolean>;
type GetRecordsFunc = () => Observable<WebsiteVisitsRecord[]>;
type UpdateRecordFunc = (record: WebsiteVisitsRecord) => Observable<WebsiteVisitsRecord>;

export abstract class WebsiteVisitsRecordDataSource {

  createRecord: CreateRecordFunc;
  deleteRecord: DeleteRecordFunc;
  getRecords: GetRecordsFunc;
  updateRecord: UpdateRecordFunc;

}
