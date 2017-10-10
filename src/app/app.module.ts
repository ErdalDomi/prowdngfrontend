import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
