import { Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardSearchComponent } from './dashboard-search/dashboard-search.component';

export const DASHBOARD_ROUTES: Routes = [
    {
      path: '',
      component: DashboardHomeComponent
    },
    {
      path: 'dashboard-search',
      component: DashboardSearchComponent
    }
];
