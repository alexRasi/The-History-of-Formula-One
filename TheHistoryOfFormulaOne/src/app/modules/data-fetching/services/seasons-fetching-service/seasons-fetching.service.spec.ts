import { TestBed } from '@angular/core/testing';
import { SeasonsFetchingService } from './seasons-fetching.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SeasonsFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SeasonsFetchingService]
  }));

  it('should be created', () => {
    const service: SeasonsFetchingService = TestBed.get(SeasonsFetchingService);
    expect(service).toBeTruthy();
  });
});
