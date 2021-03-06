import { ItemGenericDetail } from './../../../../models/ItemGenericDetail';
import { DriverItemResponseDTO } from './../../../../models/dtos/DriverItemResponseDTO';
import { ItemDisplayPageGenericData } from 'src/app/models/ItemDisplayPageGenericData';
import { Injectable } from '@angular/core';
import { DataFetchingService } from '../data-fetching-base-service/data-fetching.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DriverItemFetchingService extends DataFetchingService<ItemGenericDetail> {
  url = 'http://ergast.com/api/f1/drivers';

  constructor(private http: HttpClient) { super(); }

  getData(driverId: string): Observable<DriverItemResponseDTO> {
    return this.http.get<DriverItemResponseDTO>(this.url + '/' + driverId + '.json');
  }

  getTransformedData(driverId: string): Observable<ItemDisplayPageGenericData> {
    return this.getData(driverId).pipe(map(
      data => this.mapToItemDisplayPageGenericData(data)
    ))
  }

  mapToItemDisplayPageGenericData(driverResponse: DriverItemResponseDTO): ItemDisplayPageGenericData {
    let itemDisplayPageGenericData: ItemDisplayPageGenericData = {} as ItemDisplayPageGenericData;
    itemDisplayPageGenericData.details = [];

    const driver = driverResponse.MRData.DriverTable.Drivers[0];

    itemDisplayPageGenericData.title = driver.familyName + ' ' + driver.givenName;
    itemDisplayPageGenericData.titleAbove = 'Driver details';
    itemDisplayPageGenericData.description = driver.url;
    itemDisplayPageGenericData.titleBelow = driver.nationality;

    itemDisplayPageGenericData.details.push({attribute: 'Date of Birth', value: driver.dateOfBirth});
    itemDisplayPageGenericData.details.push({attribute: 'Nationality', value: driver.nationality});

    return itemDisplayPageGenericData;
  }

}
