import { TestBed } from '@angular/core/testing';

import { SeasonStandingsFetchingService } from './season-standings-fetching.service';

describe('SeasonStandingsFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeasonStandingsFetchingService = TestBed.get(SeasonStandingsFetchingService);
    expect(service).toBeTruthy();
  });
});
