import { RouterModule, Routes } from '@angular/router';
import { WebsiteVisitsRecordComponent } from './websiteVisitsRecord/websiteVisitsRecord.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { HomeFirstGuard } from './home/homeFirst.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'visits', component: WebsiteVisitsRecordComponent, canActivate: [AuthGuard, HomeFirstGuard] },
  { path: 'login', component: AuthComponent },
  { path: '**', redirectTo: '/visits' }
];

export const routing = RouterModule.forRoot(routes);
