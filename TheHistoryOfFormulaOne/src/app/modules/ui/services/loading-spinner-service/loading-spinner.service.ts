import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  public spinerVisibility = false;

  showSpinner() {
    this.spinerVisibility = true;
  }

  hideSpinner() {
    this.spinerVisibility = false;
  }
}
