import { TestBed } from '@angular/core/testing';

import { DriversFetchingService } from './drivers-fetching.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DriversFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DriversFetchingService]
  }));

  it('should be created', () => {
    const service: DriversFetchingService = TestBed.get(DriversFetchingService);
    expect(service).toBeTruthy();
  });
});
