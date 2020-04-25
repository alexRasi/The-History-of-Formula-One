import { TestBed } from '@angular/core/testing';

import { DataFetchingService } from './data-fetching.service';
import { SeasonsResponseDTO } from 'src/app/models/dtos/SeasonsReponseDTO';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

interface CardGenericData {
  imageLink?: string;
  altImageTitle?: string;
  label: string;
  description: string;
  moreInfoLink: string;
}


class TestDataFetchingService extends DataFetchingService<CardGenericData> {
  CACHE: CardGenericData[] = [];

  getData(parameter?: any, limit?: number, offset?: number): Observable<SeasonsResponseDTO> {
    return of(undefined)
  }
  getTransformedData(parameter?: any, limit?: number, offset?: number): Observable<SeasonsResponseDTO> {
    return of(undefined);
  }
}


describe('DataFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TestDataFetchingService]
  }));

  it('should be created', () => {
    const service: TestDataFetchingService = TestBed.get(TestDataFetchingService);
    expect(service).toBeTruthy();
  });
});
