import { CONFIG } from './../../../../../environments/config';
import { CacheService } from './../../../cache/cache.service';
import { CardDisplayPageGenericData } from './../../../../models/CardDisplayPageGenericData';
import { CardGenericData } from 'src/app/models/CardGenericData';
import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataFetchingService } from 'src/app/modules/data-fetching/services/data-fetching-base-service/data-fetching.service';
import { LoadingSpinnerService } from '../../services/loading-spinner-service/loading-spinner.service';

@Component({
  selector: 'app-card-display-page',
  templateUrl: './card-display-page.component.html',
  styleUrls: ['./card-display-page.component.scss']
})
export class CardDisplayPageComponent implements OnInit {
  public dataFetchingService: DataFetchingService<CardGenericData>;
  serviceToken: string;

  pageData: CardDisplayPageGenericData = {} as CardDisplayPageGenericData;
  dataSource: CardGenericData[];

  totalPages: number;

  cache: CardDisplayPageGenericData;

  paginationLimit = CONFIG.paginationSize;

  queryParameter = this.route.snapshot.paramMap.get('id');

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    injector: Injector,
    private loadingSpinnerService: LoadingSpinnerService,
    public cacheService: CacheService) {
    // Injecting the data subclass fetching service provided during routing
    this.serviceToken   = route.snapshot.data['requiredServiceToken'];
    this.dataFetchingService = injector.get<DataFetchingService<CardGenericData>>(<any>this.serviceToken);
  }

  ngOnInit() {
    this.scrollOnTop();

    let cacheName = this.queryParameter? (this.serviceToken + this.queryParameter) : this.serviceToken
    this.cache = this.cacheService.getCache(cacheName); // serviceToken = entity name

    if (!this.cache) {
      this.cache = this.cacheService.newCache(this.serviceToken);
      this.cache.cards = [];
    }

    this.loadData(this.queryParameter, this.paginationLimit, 0);
  }

  loadData(parameter: any, limit: number, offset: number) {
    this.loadingSpinnerService.showSpinner();

    let cachedData = this.cacheService.getFromCache(this.cache.cards, limit, offset);

    if (this.cacheExists(cachedData)) {
      this.handleCachedData(cachedData);
    } else {
      this.handleUncachedData(parameter, limit, offset);
    }
  }

  handleCachedData(cachedData: CardGenericData[]) {
    this.loadDataFromCache();
    this.dataSource = this.filterUndefinedData(cachedData);
    this.totalPages = Math.ceil(this.pageData.totalData / this.paginationLimit);
  }

  handleUncachedData(parameter: any, limit: number, offset: number) {
    this.dataFetchingService.getTransformedData(parameter, limit, offset).subscribe((pageData: CardDisplayPageGenericData) => {
      this.pageData = pageData;
      this.dataSource = pageData.cards

      this.saveDataToCache(limit, offset, pageData);

      this.totalPages = Math.ceil(pageData.totalData / this.paginationLimit);
      this.loadingSpinnerService.hideSpinner();
    }, (error) => {
      this.navigateOnPageNotFound();
      this.loadingSpinnerService.hideSpinner()
    });
  }

  loadDataFromCache() {
    this.pageData.title = this.cache.title;
    this.pageData.totalData = this.cache.totalData;
    this.pageData.belowTitle = this.cache.belowTitle;
    this.pageData.aboveTitle = this.cache.aboveTitle;

    this.loadingSpinnerService.hideSpinner();
  }

  saveDataToCache(limit: number, offset: number, data: CardDisplayPageGenericData) {
    this.cache.totalData = data.totalData;
    this.cache.title = data.title;
    this.cache.belowTitle = data.belowTitle;
    this.cache.aboveTitle = data.aboveTitle;

    this.cacheService.cache(this.cache.cards, limit, offset, data.cards);
  }

  paginatorClicked(page: number) {
    this.scrollOnTop();
    this.loadData(this.queryParameter, this.paginationLimit, (page - 1) * this.paginationLimit);
  }

  scrollOnTop() {
    document.body.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  navigateOnPageNotFound() {
    this.router.navigateByUrl('/page-not-found');
  }

  cacheExists(cachedData: any[]) {
    return cachedData[0] && !this.isEmptyObject(cachedData[0]);
  }

  filterUndefinedData(array: any[]): any[] {
    return array.filter(val => !this.isEmptyObject(val));
  }

  isEmptyObject(obj: any): boolean {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  displayPaginator() {
    return this.totalPages > 1;
  }
}
