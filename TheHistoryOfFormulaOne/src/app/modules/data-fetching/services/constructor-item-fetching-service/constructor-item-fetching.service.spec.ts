import { TestBed } from '@angular/core/testing';

import { ConstructorItemFetchingService } from './constructor-item-fetching.service';

describe('ConstructorItemFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstructorItemFetchingService = TestBed.get(ConstructorItemFetchingService);
    expect(service).toBeTruthy();
  });
});
