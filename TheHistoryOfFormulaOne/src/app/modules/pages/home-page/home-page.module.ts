import { HomePageRoutingModule } from './home-page-routing.module';
import { UiModule } from './../../ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    UiModule
  ]
})
export class HomePageModule { }
