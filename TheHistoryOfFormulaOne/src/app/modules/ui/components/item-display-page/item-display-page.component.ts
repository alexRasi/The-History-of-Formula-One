import { ItemGenericDetail } from './../../../../models/ItemGenericDetail';
import { Component, OnInit, Injector } from '@angular/core';
import { ItemDisplayPageGenericData } from 'src/app/models/ItemDisplayPageGenericData';
import { ActivatedRoute } from '@angular/router';
import { DataFetchingService } from 'src/app/modules/data-fetching/services/data-fetching-base-service/data-fetching.service';
import { LoadingSpinnerService } from '../../services/loading-spinner-service/loading-spinner.service';

@Component({
  selector: 'app-item-display-page',
  templateUrl: './item-display-page.component.html',
  styleUrls: ['./item-display-page.component.scss']
})
export class ItemDisplayPageComponent implements OnInit {
  private dataFetchingService: DataFetchingService<ItemGenericDetail>;

  pageData: ItemDisplayPageGenericData;

  constructor(private route: ActivatedRoute, injector: Injector, private loadingSpinnerService: LoadingSpinnerService) {
    // Injecting the data subclass fetching service provided during routing
    const serviceToken = route.snapshot.data['requiredServiceToken'];
    this.dataFetchingService = injector.get<DataFetchingService<ItemGenericDetail>>(<any>serviceToken);
   }

  ngOnInit() {
    this.loadingSpinnerService.showSpinner();
    this.dataFetchingService.getTransformedData(this.route.snapshot.paramMap.get('id')).subscribe((data: ItemDisplayPageGenericData) => {
      this.pageData = data;
      this.loadingSpinnerService.hideSpinner();
    });
  }

}
