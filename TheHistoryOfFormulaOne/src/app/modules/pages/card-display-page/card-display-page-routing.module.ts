import { SeasonStandingsFetchingService } from './../../data-fetching/services/season-standings-fetching-service/season-standings-fetching.service';
import { CardDisplayPageComponent } from './../../ui/components/card-display-page/card-display-page.component';
import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const SEASONS_SERVICE_TOKEN = new InjectionToken<string>("SeasonsService");

const routes: Routes = [
  {
    path: '',
    component: CardDisplayPageComponent
  },
  {
    path: 'season-standings/:id',
    data: {
      requiredServiceToken: SEASONS_SERVICE_TOKEN
    },
    loadChildren: () => import('../card-display-page/card-display-page.module').then(m => m.CardDisplayPageModule)
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: SEASONS_SERVICE_TOKEN,
      useClass: SeasonStandingsFetchingService
    }
  ]
})
export class CardDisplayPageRoutingModule { }
