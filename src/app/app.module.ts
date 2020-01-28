import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoverPreviewModule } from 'cover-preview';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoverPreviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
