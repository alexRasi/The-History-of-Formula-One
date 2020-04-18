import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CardDisplayPageComponent } from './components/card-display-page/card-display-page.component';
import { TitleComponentComponent } from './components/title-component/title-component.component';
import { DisplayCardComponent } from './components/display-card/display-card.component';

@NgModule({
  declarations: [NavbarComponent, NavItemComponent, SearchInputComponent, CardDisplayPageComponent, TitleComponentComponent, DisplayCardComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    CardDisplayPageComponent
  ]
})
export class UiModule { }
