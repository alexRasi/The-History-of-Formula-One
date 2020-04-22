import { CardDisplayPageGenericData } from './../../../../models/CardDisplayPageGenericData';
import { CardGenericData } from 'src/app/models/CardGenericData';
import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFetchingService } from 'src/app/modules/data-fetching/services/data-fetching-base-service/data-fetching.service';
import { LoadingSpinnerService } from '../../services/loading-spinner-service/loading-spinner.service';

@Component({
  selector: 'app-card-display-page',
  templateUrl: './card-display-page.component.html',
  styleUrls: ['./card-display-page.component.scss']
})
export class CardDisplayPageComponent implements OnInit {
  private dataFetchingService: DataFetchingService;

  pageData: CardDisplayPageGenericData;

  cardGenericData: CardGenericData;

  paginationLimit = 10;
  totalPages: number;

  queryParameter = this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute, injector: Injector, private loadingSpinnerService: LoadingSpinnerService) {
    // Injecting the data subclass fetching service provided during routing
    const serviceToken = route.snapshot.data['requiredServiceToken'];
    this.dataFetchingService = injector.get<DataFetchingService>(<any>serviceToken);
  }

  ngOnInit() {
    this.loadData(this.queryParameter, this.paginationLimit, 0);
  }

  loadData(parameter: any, limit: number, offset: number) {
    this.loadingSpinnerService.showSpinner();
    this.dataFetchingService.getTransformedData(parameter, limit, offset).subscribe((pageData: CardDisplayPageGenericData) => {
      this.pageData = pageData;
      this.totalPages = Math.ceil(pageData.totalData / this.paginationLimit);
      this.loadingSpinnerService.hideSpinner();
    });
  }

  paginatorClicked(page: number) {
    this.loadData(this.queryParameter, this.paginationLimit, (page-1) * this.paginationLimit);
  }
}
