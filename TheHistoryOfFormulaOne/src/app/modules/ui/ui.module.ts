import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CardDisplayPageComponent } from './components/card-display-page/card-display-page.component';
import { TitleComponentComponent } from './components/title-component/title-component.component';
import { DisplayCardComponent } from './components/display-card/display-card.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SpinLoaderComponent } from './components/spin-loader/spin-loader.component';
import { ItemDisplayPageComponent } from './components/item-display-page/item-display-page.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavItemComponent,
    SearchInputComponent,
    CardDisplayPageComponent,
    TitleComponentComponent,
    DisplayCardComponent,
    HomePageComponent,
    SpinLoaderComponent,
    ItemDisplayPageComponent,
    PaginatorComponent,
    FooterComponent,
    PageNotFoundComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    CardDisplayPageComponent,
    HomePageComponent,
    SpinLoaderComponent,
    ItemDisplayPageComponent,
    FooterComponent,
    PageNotFoundComponent,
    ModalComponent
  ]
})
export class UiModule { }
