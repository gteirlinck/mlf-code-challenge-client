import { Observable } from 'rxjs/Observable';
import { ExclusionListItem } from './exclusionsList.model';

type GetExclusionsListFunc = () => Observable<ExclusionListItem[]>;

export abstract class ExclusionsListDataSource {

  getExclusionsList: GetExclusionsListFunc;

}
