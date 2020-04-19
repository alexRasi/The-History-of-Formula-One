import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeasonsFetchingService } from './modules/data-fetching/services/data-fetcing-service/data-fetching.service';

const SEASONS_SERVICE_TOKEN = new InjectionToken<string>("SeasonsService");

const routes: Routes = [
  {
    path: 'seasons',
    data: {
      mainTitle: 'Seasons',
      requiredServiceToken: SEASONS_SERVICE_TOKEN
    },
    loadChildren: () => import('./modules/pages/card-display-page/card-display-page.module').then(m => m.CardDisplayPageModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: SEASONS_SERVICE_TOKEN,
      useClass: SeasonsFetchingService
    }
  ]
})
export class AppRoutingModule { }
