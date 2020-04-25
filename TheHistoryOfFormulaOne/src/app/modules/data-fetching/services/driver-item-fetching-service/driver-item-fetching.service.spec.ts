import { TestBed } from '@angular/core/testing';

import { DriverItemFetchingService } from './driver-item-fetching.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DriverItemFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DriverItemFetchingService]
  }));

  it('should be created', () => {
    const service: DriverItemFetchingService = TestBed.get(DriverItemFetchingService);
    expect(service).toBeTruthy();
  });
});
