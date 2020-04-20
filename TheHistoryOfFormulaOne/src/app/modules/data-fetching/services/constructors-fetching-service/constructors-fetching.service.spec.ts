import { TestBed } from '@angular/core/testing';

import { ConstructorsFetchingService } from './constructors-fetching.service';

describe('ConstructorsFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstructorsFetchingService = TestBed.get(ConstructorsFetchingService);
    expect(service).toBeTruthy();
  });
});
