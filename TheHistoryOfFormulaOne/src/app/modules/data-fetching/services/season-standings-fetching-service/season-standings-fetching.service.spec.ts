import { TransformedSeasonStandingsResponseMock, SeasonStandingsResponseDTOMock } from './../../../../testing-mocks/SeasonStandingsResponseDTOMock';
import { SeasonStandingsResponseDTO } from './../../../../models/dtos/SeasonStandingsResponseDTO';
import { TestBed } from '@angular/core/testing';

import { SeasonStandingsFetchingService } from './season-standings-fetching.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('SeasonStandingsFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SeasonStandingsFetchingService]
  }));

  it('should be created', () => {
    const service: SeasonStandingsFetchingService = TestBed.get(SeasonStandingsFetchingService);
    expect(service).toBeTruthy();
  });

  it('should fetch a SeasonStandingDTO object and return it transformed to CardDisplayPageGenericData', async () => {
    const service: SeasonStandingsFetchingService = TestBed.get(SeasonStandingsFetchingService)
    spyOn(service, 'getData').and.returnValue(of(SeasonStandingsResponseDTOMock));

    let transformedData;
    service.getTransformedData(undefined, undefined, undefined).subscribe(data => transformedData = data);

    expect(transformedData).toEqual(TransformedSeasonStandingsResponseMock);
  });
});
