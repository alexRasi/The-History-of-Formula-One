import { LoadingSpinnerService } from './modules/ui/services/loading-spinner-service/loading-spinner.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TheHistoryOfFormulaOne';

  constructor(public loadingSpinnerService: LoadingSpinnerService) {}
}
