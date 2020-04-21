import { UiModule } from './../../ui/ui.module';
import { ItemDisplayRoutingModule } from './item-display-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ItemDisplayRoutingModule,
    UiModule
  ]
})
export class ItemDisplayPageModule { }
