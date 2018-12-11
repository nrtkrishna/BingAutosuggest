
/// <reference  path="../../node_modules/bingmaps/types/MicrosoftMaps/Modules/AutoSuggest.d.ts"/>
/// <reference path="../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.d.ts" />
// <reference  path="../../node_modules\bingmaps\types\MicrosoftMaps\Modules\SpatialMath.d.ts"/>

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
