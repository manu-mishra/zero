import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { buildRoutes } from '../menu-utils';
import { LookupService } from './microfrontends/lookup.service';
import { Microfrontend } from './microfrontends/microfrontend';
import { PluginOptions } from './microfrontends/plugin';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {

  headerProxyComponent:PluginOptions={
    type: 'module',
    remoteEntry: environment.uibranding_url,
    exposedModule: './header',

    displayName: 'header',
    componentName: 'HeaderComponent'
}
  microfrontends: Microfrontend[] = [];

  constructor(
    private router: Router,
    private lookupService: LookupService) {
  }

  async ngOnInit(): Promise<void> {
    this.microfrontends = await this.lookupService.lookup();
    const routes = buildRoutes(this.microfrontends);
    this.router.resetConfig(routes);
  }
}

