import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { UiModule } from './../../ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule { }
