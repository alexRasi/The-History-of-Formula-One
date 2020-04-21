import { TestBed } from '@angular/core/testing';

import { DriverItemFetchingService } from './driver-item-fetching.service';

describe('DriverItemFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriverItemFetchingService = TestBed.get(DriverItemFetchingService);
    expect(service).toBeTruthy();
  });
});
