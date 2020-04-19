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

  constructor(route: ActivatedRoute, injector: Injector) {
    const serviceToken = route.snapshot.data['requiredService'];

    this.dataFetchingService = injector.get<DataFetchingService>(<any>serviceToken);
   }

  ngOnInit() {
    this.dataFetchingService.getData();
  }

}
