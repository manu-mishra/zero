import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSearchComponent } from './dashboard-search/dashboard-search.component';
import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTES } from './dashboard.routes';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
    MatIconModule,
    MatMenuModule
  ],
  declarations: [
    DashboardSearchComponent,
    DashboardHomeComponent
  ]
})
export class DashboardModule { }
