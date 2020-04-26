import { UiModule } from './../../ui/ui.module';
import { CardDisplayPageRoutingModule } from './card-display-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardDisplayPageRoutingModule,
    UiModule
  ]
})
export class CardDisplayPageModule { }
