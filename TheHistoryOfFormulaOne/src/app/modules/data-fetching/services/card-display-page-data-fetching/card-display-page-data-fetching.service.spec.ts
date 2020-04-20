import { TestBed } from '@angular/core/testing';

import { CardDisplayPageDataFetchingService } from './card-display-page-data-fetching.service';

describe('CardDisplayPageDataFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardDisplayPageDataFetchingService = TestBed.get(CardDisplayPageDataFetchingService);
    expect(service).toBeTruthy();
  });
});
