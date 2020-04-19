import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFetchingService } from 'src/app/modules/data-fetching/services/data-fetcing-service/data-fetching.service';

@Component({
  selector: 'app-card-display-page',
  templateUrl: './card-display-page.component.html',
  styleUrls: ['./card-display-page.component.scss']
})
export class CardDisplayPageComponent implements OnInit {
  private dataFetchingService: DataFetchingService;

  mainTitle: string;

  constructor(route: ActivatedRoute, injector: Injector) {
    // Injecting the data subclass fetching service provided during routing
    const serviceToken = route.snapshot.data['requiredServiceToken'];
    this.dataFetchingService = injector.get<DataFetchingService>(<any>serviceToken);

    this.mainTitle = route.snapshot.data['mainTitle'];
   }

  ngOnInit() {
    this.dataFetchingService.getData().subscribe(res => {
      console.log(res);
    })
  }

}
