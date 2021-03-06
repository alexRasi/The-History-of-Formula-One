import { ConstructorItemFetchingService } from './modules/data-fetching/services/constructor-item-fetching-service/constructor-item-fetching.service';
import { DriverItemFetchingService } from './modules/data-fetching/services/driver-item-fetching-service/driver-item-fetching.service';
import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeasonsFetchingService } from './modules/data-fetching/services/seasons-fetching-service/seasons-fetching.service';
import { DriversFetchingService } from './modules/data-fetching/services/drivers-fetching-service/drivers-fetching.service';
import { ConstructorsFetchingService } from './modules/data-fetching/services/constructors-fetching-service/constructors-fetching.service';

const SEASONS_SERVICE_TOKEN = new InjectionToken<string>("Seasons");
const DRIVERS_SERVICE_TOKEN = new InjectionToken<string>("Drivers");
const DRIVER_ITEM_SERVICE_TOKEN = new InjectionToken<string>("DriverItem");
const CONSTRUCTORS_SERVICE_TOKEN = new InjectionToken<string>("Constructors");
const CONSTRUCTOR_ITEM_SERVICE_TOKEN = new InjectionToken<string>("ConstructorItem");

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'seasons',
    data: {
      requiredServiceToken: SEASONS_SERVICE_TOKEN
    },
    loadChildren: () => import('./modules/pages/card-display-page/card-display-page.module').then(m => m.CardDisplayPageModule)
  },
  {
    path: 'drivers',
    data: {
      requiredServiceToken: DRIVERS_SERVICE_TOKEN
    },
    loadChildren: () => import('./modules/pages/card-display-page/card-display-page.module').then(m => m.CardDisplayPageModule)
  },
  {
    path: 'constructors',
    data: {
      requiredServiceToken: CONSTRUCTORS_SERVICE_TOKEN
    },
    loadChildren: () => import('./modules/pages/card-display-page/card-display-page.module').then(m => m.CardDisplayPageModule)
  },
  {
    path: 'drivers/:id',
    data: {
      requiredServiceToken: DRIVER_ITEM_SERVICE_TOKEN
    },
    loadChildren: () => import('./modules/pages/item-display-page/item-display-page.module').then(m => m.ItemDisplayPageModule)
  },
  {
    path: 'constructors/:id',
    data: {
      requiredServiceToken: CONSTRUCTOR_ITEM_SERVICE_TOKEN
    },
    loadChildren: () => import('./modules/pages/item-display-page/item-display-page.module').then(m => m.ItemDisplayPageModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./modules/pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
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
    },
    {
      provide: DRIVER_ITEM_SERVICE_TOKEN,
      useClass: DriverItemFetchingService
    },
    {
      provide: CONSTRUCTOR_ITEM_SERVICE_TOKEN,
      useClass: ConstructorItemFetchingService
    }
  ]
})
export class AppRoutingModule { }
