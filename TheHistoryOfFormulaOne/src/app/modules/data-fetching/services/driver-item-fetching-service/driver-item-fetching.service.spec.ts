import { DriverItemResponseDTOMock, TransformedDriverItemResponseMock } from './../../../../testing-mocks/DriverItemResponseDTOMock';
import { TestBed } from '@angular/core/testing';
import { DriverItemFetchingService } from './driver-item-fetching.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('DriverItemFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DriverItemFetchingService]
  }));

  it('should be created', () => {
    const service: DriverItemFetchingService = TestBed.get(DriverItemFetchingService);
    expect(service).toBeTruthy();
  });

  it('should fetch a DriverItemResponseDTO object and return it transformed to ItemDisplayPageGenericData', async () => {
    const service: DriverItemFetchingService = TestBed.get(DriverItemFetchingService)
    spyOn(service,'getData').and.returnValue(of(DriverItemResponseDTOMock));

    let transformedData;
    service.getTransformedData(undefined).subscribe( data => transformedData = data);

    expect(transformedData).toEqual(TransformedDriverItemResponseMock);
  });
});
