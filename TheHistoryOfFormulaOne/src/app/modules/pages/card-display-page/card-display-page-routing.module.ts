import { CardDisplayPageComponent } from './../../ui/components/card-display-page/card-display-page.component';
import { NavbarComponent } from './../../ui/components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CardDisplayPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardDisplayPageRoutingModule { }
``
