import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerService } from '../../services/loading-spinner-service/loading-spinner.service';

@Component({
  selector: 'app-spin-loader',
  templateUrl: './spin-loader.component.html',
  styleUrls: ['./spin-loader.component.scss']
})
export class SpinLoaderComponent implements OnInit {

  constructor(public loadingSpinnerService: LoadingSpinnerService){}

  ngOnInit() {
  }

}
