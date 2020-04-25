import { TestBed } from '@angular/core/testing';

import { ConstructorItemFetchingService } from './constructor-item-fetching.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ConstructorItemFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ConstructorItemFetchingService]
  }));

  it('should be created', () => {
    const service: ConstructorItemFetchingService = TestBed.get(ConstructorItemFetchingService);
    expect(service).toBeTruthy();
  });
});
