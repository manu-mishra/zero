import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full'
    },
    { 
        path: 'dashboard', 
        loadChildren: () => import('./dashboard/dashboard.module')
            .then(m => m.DashboardModule)
    }
];
