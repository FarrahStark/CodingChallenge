import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObjectGraphViewerComponent } from './object-graph-viewer/object-graph-viewer.component';
import {ObjectGraphParserService} from "./object-graph-parser.service";

@NgModule({
  declarations: [
    AppComponent,
    ObjectGraphViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ObjectGraphParserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
