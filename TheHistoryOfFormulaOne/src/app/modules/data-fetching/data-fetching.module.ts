import { DataFetchingService } from './services/data-fetcing-service/data-fetching.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    DataFetchingService
  ]
})
export class DataFetchingModule { }
