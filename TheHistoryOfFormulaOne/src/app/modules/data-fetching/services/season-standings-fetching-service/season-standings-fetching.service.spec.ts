import { TestBed } from '@angular/core/testing';

import { SeasonStandingsFetchingService } from './season-standings-fetching.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SeasonStandingsFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SeasonStandingsFetchingService]
  }));

  it('should be created', () => {
    const service: SeasonStandingsFetchingService = TestBed.get(SeasonStandingsFetchingService);
    expect(service).toBeTruthy();
  });
});
