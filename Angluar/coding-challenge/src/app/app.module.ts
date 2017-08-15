import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObjectGraphViewerComponent } from './object-graph-viewer/object-graph-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectGraphViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
