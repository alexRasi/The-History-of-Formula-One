import { DriversResponseDTOMock, TransformedDriversResponseMock } from './../../../../testing-mocks/DriversResponseDTOMock';
import { TestBed } from '@angular/core/testing';

import { DriversFetchingService } from './drivers-fetching.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('DriversFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DriversFetchingService]
  }));

  it('should be created', () => {
    const service: DriversFetchingService = TestBed.get(DriversFetchingService);
    expect(service).toBeTruthy();
  });

  it('should fetch a DriverItemResponseDTO object and return it transformed to ItemDisplayPageGenericData', async () => {
    const service: DriversFetchingService = TestBed.get(DriversFetchingService)
    spyOn(service, 'getData').and.returnValue(of(DriversResponseDTOMock));

    let transformedData;
    service.getTransformedData(undefined, undefined, undefined).subscribe(data => transformedData = data);

    expect(transformedData).toEqual(TransformedDriversResponseMock);
  });
});
