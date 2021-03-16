import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { MeanComponent } from './mean.component';
import { MearnComponent } from './mearn.component';
import { MevnComponent } from './mevn.component';

@NgModule({
  declarations: [
    AppComponent,
    MeanComponent,
    MearnComponent,
    MevnComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
