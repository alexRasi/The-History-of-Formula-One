import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  private spinnerVisibilitySubject = new BehaviorSubject(false);
  spinnerVisibility$ = this.spinnerVisibilitySubject.asObservable();

  showSpinner() {
    this.spinnerVisibilitySubject.next(true);
  }

  hideSpinner() {
    this.spinnerVisibilitySubject.next(false);
  }
}
