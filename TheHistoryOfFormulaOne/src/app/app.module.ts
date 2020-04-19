import { UiModule } from './modules/ui/ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFetchingModule } from './modules/data-fetching/data-fetching.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    DataFetchingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
