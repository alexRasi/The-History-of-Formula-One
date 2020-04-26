import { SeasonsResponseDTOMock, TransformedSeasonsResponseMock } from './../../../../testing-mocks/SeasonsResponseDTOMock';
import { TestBed } from '@angular/core/testing';
import { SeasonsFetchingService } from './seasons-fetching.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('SeasonsFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SeasonsFetchingService]
  }));

  it('should be created', () => {
    const service: SeasonsFetchingService = TestBed.get(SeasonsFetchingService);
    expect(service).toBeTruthy();
  });


  it('should fetch a SeasonsResponseDTO array and return it transformed to CardDisplayPageGenericData', async () => {
    const service: SeasonsFetchingService = TestBed.get(SeasonsFetchingService)
    spyOn(service, 'getData').and.returnValue(of(SeasonsResponseDTOMock));

    let transformedData;
    service.getTransformedData(undefined, undefined, undefined).subscribe(data => transformedData = data);

    expect(transformedData).toEqual(TransformedSeasonsResponseMock);
  });
});
