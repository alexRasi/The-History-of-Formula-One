import { TestBed } from '@angular/core/testing';
import { LoadingSpinnerService } from './loading-spinner.service';

describe('LoadingSpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingSpinnerService = TestBed.get(LoadingSpinnerService);
    expect(service).toBeTruthy();
  });

  it('should return true when showSpinner() is called', async () => {
    const service: LoadingSpinnerService = TestBed.get(LoadingSpinnerService);
    service.showSpinner();

    let result: boolean;
    service.spinnerVisibility$.subscribe((value) => {
       result = value;
    })

    expect(result).toEqual(true);  });

  it('should return false when hideSpinner() is called',async () => {
    const service: LoadingSpinnerService = TestBed.get(LoadingSpinnerService);
    service.hideSpinner();

    let result: boolean;
    service.spinnerVisibility$.subscribe((value) => {
       result = value;
    })

    expect(result).toEqual(false);
  });

});
