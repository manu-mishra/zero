import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { ConfigComponent } from './config/config.component';
import { PluginProxyComponent } from './microfrontends/plugin-proxy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAllModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    MaterialAllModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigComponent, 
    PluginProxyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
