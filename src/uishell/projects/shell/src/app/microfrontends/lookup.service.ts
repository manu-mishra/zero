import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LookupService {
    constructor(){}
    lookup(): Promise<Microfrontend[]> {
        return Promise.resolve([
            {
                // For Loading
                type: 'module',
                remoteEntry: environment.application1entry_url,
                exposedModule: './Module',

                // For Routing
                displayName: 'Application 1',
                routePath: 'application1',
                ngModuleName: 'DashboardModule'
            }
        ] as Microfrontend[]);
    }
}
