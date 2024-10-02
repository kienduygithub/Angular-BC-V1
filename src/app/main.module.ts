import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainRoutingModule } from './main-routing';
import { MainComponent } from './main.component';
import { BaseLayoutComponent } from './common/layout/base/base.layout';

@NgModule({
  declarations: [
    MainComponent,
    BaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
