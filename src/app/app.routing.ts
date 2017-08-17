import { RouterModule, Routes } from '@angular/router';
import { WebsiteVisitsRecordComponent } from './websiteVisitsRecord/websiteVisitsRecord.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { HomeFirstGuard } from './home/homeFirst.guard';
import { CallbackComponent } from './auth/callback.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'visits', component: WebsiteVisitsRecordComponent, canActivate: [AuthGuard, HomeFirstGuard] },
  { path: '**', redirectTo: '/visits' }
];

export const routing = RouterModule.forRoot(routes);
