import { NgModule } from '@angular/core';
import { ExclusionsListDataSource } from './exclusionsList.datasource';
import { ExclusionsListRepository } from './exclusionsList.repository';
import { ExclusionsListRestDataSource } from './exclusionsList.rest.datasource';
import { MlfAppHttpModule } from '../mlfAppHttp/mlfAppHttp.module';
import { MlfAppHttpService } from '../mlfAppHttp/mlfAppHttp.service';

@NgModule({
  declarations: [],
  imports: [MlfAppHttpModule],
  exports: [],
  providers: [ExclusionsListRepository, MlfAppHttpService, { provide: ExclusionsListDataSource, useClass: ExclusionsListRestDataSource }],
})
export class ExclusionsListModule { }
