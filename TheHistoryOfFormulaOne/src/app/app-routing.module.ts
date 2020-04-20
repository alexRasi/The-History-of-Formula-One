import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeasonsFetchingService, DriversFetchingService, ConstructorsFetchingService } from './modules/data-fetching/services/data-fetcing-service/data-fetching.service';

const SEASONS_SERVICE_TOKEN = new InjectionToken<string>("SeasonsService");
const DRIVERS_SERVICE_TOKEN = new InjectionToken<string>("DriversService");
const CONSTRUCTORS_SERVICE_TOKEN = new InjectionToken<string>("ConstructorsService");

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'seasons',
    data: {
      mainTitle: 'Seasons',
      requiredServiceToken: SEASONS_SERVICE_TOKEN
    },
    loadChildren: () => import('./modules/pages/card-display-page/card-display-page.module').then(m => m.CardDisplayPageModule)
  },
  {
    path: 'drivers',
    data: {
      mainTitle: 'Drivers',
      requiredServiceToken: DRIVERS_SERVICE_TOKEN
    },
    loadChildren: () => import('./modules/pages/card-display-page/card-display-page.module').then(m => m.CardDisplayPageModule)
  },
  {
    path: 'constructors',
    data: {
      mainTitle: 'Constructors',
      requiredServiceToken: CONSTRUCTORS_SERVICE_TOKEN
    },
    loadChildren: () => import('./modules/pages/card-display-page/card-display-page.module').then(m => m.CardDisplayPageModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: SEASONS_SERVICE_TOKEN,
      useClass: SeasonsFetchingService
    },
    {
      provide: DRIVERS_SERVICE_TOKEN,
      useClass: DriversFetchingService
    },
    {
      provide: CONSTRUCTORS_SERVICE_TOKEN,
      useClass: ConstructorsFetchingService
    }
  ]
})
export class AppRoutingModule { }
