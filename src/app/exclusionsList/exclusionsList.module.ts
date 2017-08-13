import { NgModule } from '@angular/core';
import { ExclusionsListDataSource } from './exclusionsList.datasource';
import { ExclusionsListRepository } from './exclusionsList.repository';
import { ExclusionsListStaticDataSource } from './exclusionsList.static.datasource';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [ExclusionsListRepository, { provide: ExclusionsListDataSource, useClass: ExclusionsListStaticDataSource }],
})
export class ExclusionsListModule { }
