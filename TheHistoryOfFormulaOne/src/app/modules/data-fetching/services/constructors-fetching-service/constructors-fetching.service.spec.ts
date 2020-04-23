import { TestBed } from '@angular/core/testing';

import { ConstructorsFetchingService } from './constructors-fetching.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ConstructorsFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ConstructorsFetchingService]
  }));

  it('should be created', () => {
    const service: ConstructorsFetchingService = TestBed.get(ConstructorsFetchingService);
    expect(service).toBeTruthy();
  });
});
