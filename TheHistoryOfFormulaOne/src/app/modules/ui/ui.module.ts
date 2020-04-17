import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  declarations: [NavbarComponent, NavItemComponent, SearchInputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class UiModule { }
