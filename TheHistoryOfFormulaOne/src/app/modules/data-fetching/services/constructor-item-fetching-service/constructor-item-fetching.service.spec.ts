import { ConstructorItemResponseDTO_MOCK, TransformedConstructorItemResponseMock } from './../../../../testing-mocks/ConstructorItemResponseDTOMock';
import { TestBed } from '@angular/core/testing';

import { ConstructorItemFetchingService } from './constructor-item-fetching.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';


describe('ConstructorItemFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ConstructorItemFetchingService]
  }));

  it('should be created', () => {
    const service: ConstructorItemFetchingService = TestBed.get(ConstructorItemFetchingService);
    expect(service).toBeTruthy();
  });

  it('should fetch a ConstructorItemResponseDTO object and return it transformed to ItemDisplayPageGenericData', async () => {
    const service: ConstructorItemFetchingService = TestBed.get(ConstructorItemFetchingService)
    spyOn(service,'getData').and.returnValue(of(ConstructorItemResponseDTO_MOCK));

    let transformedData;
    service.getTransformedData('test').subscribe( data => transformedData = data);

    expect(transformedData).toEqual(TransformedConstructorItemResponseMock);
  });
});
