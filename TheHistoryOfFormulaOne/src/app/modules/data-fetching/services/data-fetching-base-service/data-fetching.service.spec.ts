import { TestBed } from '@angular/core/testing';

import { DataFetchingService } from './data-fetching.service';

describe('DataFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFetchingService = TestBed.get(DataFetchingService);
    expect(service).toBeTruthy();
  });
});
