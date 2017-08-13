import { RouterModule, Routes } from '@angular/router';
import { WebsiteVisitsRecordComponent } from './websiteVisitsRecord/websiteVisitsRecord.component';

const routes: Routes = [
  { path: '', component: WebsiteVisitsRecordComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);
