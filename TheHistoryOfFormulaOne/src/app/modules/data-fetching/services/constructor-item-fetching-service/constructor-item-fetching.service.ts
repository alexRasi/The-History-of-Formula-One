import { ItemGenericDetail } from './../../../../models/ItemGenericDetail';
import { ConstructorItemResponseDTO } from './../../../../models/dtos/ConstructorItemResponseDTO';
import { ItemDisplayPageGenericData } from 'src/app/models/ItemDisplayPageGenericData';
import { Injectable } from '@angular/core';
import { DataFetchingService } from '../data-fetching-base-service/data-fetching.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ConstructorItemFetchingService extends DataFetchingService<ItemGenericDetail> {
  url = 'http://ergast.com/api/f1/constructors';

  constructor(private http: HttpClient) { super(); }

  getData(constructorId: string): Observable<any> {
    return this.http.get(this.url + '/' + constructorId + '.json');
  }

  getTransformedData(constructorId: string): Observable<any> {
    return this.getData(constructorId).pipe(map(
      data => this.mapToItemDisplayPageGenericData(data)
    ))
  }

  mapToItemDisplayPageGenericData(driverResponse: ConstructorItemResponseDTO): ItemDisplayPageGenericData {
    let itemDisplayPageGenericData: ItemDisplayPageGenericData = {} as ItemDisplayPageGenericData;
    itemDisplayPageGenericData.details = [];

    const constructor = driverResponse.MRData.ConstructorTable.Constructors[0];

    itemDisplayPageGenericData.title = constructor.name;
    itemDisplayPageGenericData.titleAbove = 'Constructor details';
    itemDisplayPageGenericData.description = constructor.url;
    itemDisplayPageGenericData.titleBelow = constructor.nationality;

    itemDisplayPageGenericData.details.push({ attribute: 'Nationality', value: constructor.nationality });

    return itemDisplayPageGenericData;
  }

}
