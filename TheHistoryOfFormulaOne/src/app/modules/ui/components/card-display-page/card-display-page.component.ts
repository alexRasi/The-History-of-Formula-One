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

  constructor(private route: ActivatedRoute, injector: Injector, private loadingSpinnerService: LoadingSpinnerService) {
    // Injecting the data subclass fetching service provided during routing
    const serviceToken = route.snapshot.data['requiredServiceToken'];
    this.dataFetchingService = injector.get<DataFetchingService>(<any>serviceToken);
  }

  ngOnInit() {
    this.loadingSpinnerService.showSpinner();
    this.dataFetchingService.getTransformedData(this.route.snapshot.paramMap.get('id')).subscribe((pageData: CardDisplayPageGenericData) => {
      this.pageData = pageData;
      this.loadingSpinnerService.hideSpinner();
    });
  }

}
