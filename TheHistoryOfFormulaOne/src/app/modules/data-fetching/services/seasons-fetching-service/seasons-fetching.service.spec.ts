import { TestBed } from '@angular/core/testing';

import { SeasonsFetchingService } from './seasons-fetching.service';

describe('SeasonsFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeasonsFetchingService = TestBed.get(SeasonsFetchingService);
    expect(service).toBeTruthy();
  });
});
