import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainRoutingModule } from './main-routing';
import { MainComponent } from './main.component';
import { AdminRouting } from './screen/admin/admin-routing';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    AdminRouting,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
