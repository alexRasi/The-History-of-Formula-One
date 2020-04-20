import { TestBed } from '@angular/core/testing';

import { DriversFetchingService } from './drivers-fetching.service';

describe('DriversFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriversFetchingService = TestBed.get(DriversFetchingService);
    expect(service).toBeTruthy();
  });
});
