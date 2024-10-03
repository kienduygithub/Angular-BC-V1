import { APP_INITIALIZER, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainRoutingModule } from './main-routing';
import { MainComponent } from './main.component';
import { AdminRouting } from './screen/admin/admin-routing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppConfig } from './common/config/app.config';
import { environment } from '../environments/environment';

export const HttpLoaderFactory = (http: HttpClient) => {
  return new TranslateHttpLoader(http);
}

export const AppConfigFactory = (appConfig: AppConfig) => {
  return () => appConfig.LoadAppConfig();
}

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    AdminRouting,
    HttpClientModule,
    TranslateModule.forRoot({
      // defaultLanguage: JSON.parse(localStorage.getItem("currLang")!) ?? environment.lang,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: AppConfigFactory,
      deps: [AppConfig],
      multi: true
    }
  ],
  bootstrap: [MainComponent]
})
export class MainModule { }
