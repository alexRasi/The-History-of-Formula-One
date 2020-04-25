import { ConstructorsResponseDTOMock, TransformedConstructorsResponseMock } from './../../../../testing-mocks/ConstructorsResponseDTOMock';
import { ConstructorsResponseDTO } from './../../../../models/dtos/ConstructorsResponseDTO';
import { TestBed } from '@angular/core/testing';

import { ConstructorsFetchingService } from './constructors-fetching.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';


describe('ConstructorsFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ConstructorsFetchingService]
  }));

  it('should be created', () => {
    const service: ConstructorsFetchingService = TestBed.get(ConstructorsFetchingService);
    expect(service).toBeTruthy();
  });

  it('should fetch a ConstructorItemResponseDTO array and return it transformed to ItemDisplayPageGenericData', async () => {
    const service: ConstructorsFetchingService = TestBed.get(ConstructorsFetchingService)
    spyOn(service,'getData').and.returnValue(of(ConstructorsResponseDTOMock));

    let transformedData;
    service.getTransformedData(undefined,undefined,undefined).subscribe( data => transformedData = data);

    expect(transformedData).toEqual(TransformedConstructorsResponseMock);
  });
});
