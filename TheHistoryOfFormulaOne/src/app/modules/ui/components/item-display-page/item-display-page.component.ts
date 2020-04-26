import { ItemGenericDetail } from './../../../../models/ItemGenericDetail';
import { Component, OnInit, Injector, Inject, InjectionToken } from '@angular/core';
import { ItemDisplayPageGenericData } from 'src/app/models/ItemDisplayPageGenericData';
import { ActivatedRoute, Router } from '@angular/router';
import { DataFetchingService } from 'src/app/modules/data-fetching/services/data-fetching-base-service/data-fetching.service';
import { LoadingSpinnerService } from '../../services/loading-spinner-service/loading-spinner.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { CacheService } from 'src/app/modules/cache/cache.service';

@Component({
  selector: 'app-item-display-page',
  templateUrl: './item-display-page.component.html',
  styleUrls: ['./item-display-page.component.scss']
})
export class ItemDisplayPageComponent implements OnInit {
  private dataFetchingService: DataFetchingService<ItemGenericDetail>;
  serviceToken: InjectionToken<string>;

  pageData: ItemDisplayPageGenericData;

  cache: ItemDisplayPageGenericData;

  queryParameter = this.route.snapshot.paramMap.get('id');

  modalMockVisibility = false;
  modalMock2Visibility = false;

  constructor(
    private route: ActivatedRoute,
    @Inject(Injector) injector: Injector,
    private loadingSpinnerService: LoadingSpinnerService,
    public cacheService: CacheService,
    private router: Router) {
    // Injecting the data subclass fetching service provided during routing
    this.serviceToken = route.snapshot.data['requiredServiceToken'];
    this.dataFetchingService = injector.get<DataFetchingService<ItemGenericDetail>>(<any>this.serviceToken);
  }

  ngOnInit() {
    this.scrollOnTop();

    let cacheName = this.queryParameter ? (this.serviceToken['_desc'] + this.queryParameter) : this.serviceToken['_desc']

    this.cache = this.cacheService.getCache(cacheName); // serviceToken = entity name
    if (!this.cache) {
      this.cache = this.cacheService.newCache(cacheName);
    }

   if(this.isEmptyObject(this.cache)) {
     this.loadData()
   } else {
     this.pageData = this.cache;
   }
  }
  loadData() {
    this.loadingSpinnerService.showSpinner();
    this.dataFetchingService.getTransformedData(this.route.snapshot.paramMap.get('id')).subscribe((data: ItemDisplayPageGenericData) => {
      this.pageData = data;
      Object.assign(this.cache, data);
      this.loadingSpinnerService.hideSpinner();
    }, (error) => {
      this.navigateOnPageNotFound();
      this.loadingSpinnerService.hideSpinner()
    });
  }

  isUrl() {
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (this.pageData && this.pageData.description) {
      return this.pageData.description.match(regex);
    } else {
      return false;
    }
  }

  navigateOnPageNotFound() {
    this.router.navigateByUrl('/page-not-found');
  }

  scrollOnTop() {
    document.body.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  isEmptyObject(obj: any): boolean {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
}
