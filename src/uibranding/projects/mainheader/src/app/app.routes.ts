import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HeaderComponent,
      pathMatch: 'full'
    }
];
