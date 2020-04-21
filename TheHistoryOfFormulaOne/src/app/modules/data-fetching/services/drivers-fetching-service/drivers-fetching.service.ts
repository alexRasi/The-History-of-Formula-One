import { Injectable } from '@angular/core';
import { DataFetchingService } from '../data-fetching-base-service/data-fetching.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DriversResponseDTO } from 'src/app/models/dtos/DriversResponseDTO';
import { CardGenericData } from 'src/app/models/CardGenericData';
import { CardDisplayPageGenericData } from 'src/app/models/CardDisplayPageGenericData';

@Injectable()
export class DriversFetchingService extends DataFetchingService {
  url = 'http://ergast.com/api/f1/drivers.json';

  constructor(private http: HttpClient) { super(); }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

  getTransformedData(): Observable<any> {
    return this.getData().pipe(map(
      data => this.mapToCardGenericData(data)
    ))
  }

  mapToCardGenericData(driversResponse: DriversResponseDTO): CardDisplayPageGenericData {
    const cardGenericData: CardGenericData[] = [];

    driversResponse.MRData.DriverTable.Drivers.forEach(
      driver => {
        cardGenericData.push({
          label: driver.familyName + ' ' + driver.givenName,
          description: driver.url,
          moreInfoLink: '/drivers/' + driver.driverId
        })
      }
    )

    return {cards: cardGenericData, title: 'Drivers'}
  }

}
