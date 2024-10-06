import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing';
import { MainComponent } from './main.component';
import { AdminRouting } from './screen/admin/admin-routing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppConfig } from './common/config/app.config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { AppLayoutModule } from './common/layout/app-layout.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AntdProviders } from './common/service/antd.provider';
registerLocaleData(en);

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
    BrowserAnimationsModule,
    MainRoutingModule,
    AdminRouting,
    HttpClientModule,
    AppLayoutModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: AppConfigFactory,
      deps: [AppConfig],
      multi: true
    },
    provideAnimationsAsync(),
    provideHttpClient(),
    ...AntdProviders,
  ],
  bootstrap: [MainComponent]
})
export class MainModule { }
