import { DriversResponseDTO } from './../../../../models/dtos/DriversResponseDTO';
import { SeasonsResponseDTO } from './../../../../models/dtos/SeasonsReponseDTO';
import { CardGenericData } from './../../../../models/CardGenericData';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as _ from 'lodash';

export abstract class DataFetchingService {
  abstract getData(): any
  abstract getTransformedData()
  abstract mapToCardGenericData(data: any)
}

@Injectable()
export class SeasonsFetchingService extends DataFetchingService {

  url = 'http://ergast.com/api/f1/seasons.json';

  constructor(private http: HttpClient) { super(); }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

  getTransformedData(): Observable<any> {
    return this.getData().pipe(map(
      data => this.mapToCardGenericData(data)
    ))
  }

  mapToCardGenericData(seasonsResponse: SeasonsResponseDTO): CardGenericData[] {
    const cardGenericData: CardGenericData[] = [];

    seasonsResponse.MRData.SeasonTable.Seasons.forEach(
      season => {
        cardGenericData.push({
          label: season.season,
          description: season.url,
          moreInfoLink: '/'
        })
      }
    )

    return cardGenericData
  }
}

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

  mapToCardGenericData(driversResponse: DriversResponseDTO): CardGenericData[] {
    const cardGenericData: CardGenericData[] = [];

    driversResponse.MRData.DriverTable.Drivers.forEach(
      driver => {
        cardGenericData.push({
          label: driver.familyName + ' ' + driver.givenName,
          description: driver.url,
          moreInfoLink: '/'
        })
      }
    )

    return cardGenericData
  }

}

@Injectable()
export class ConstructorsFetchingService extends DataFetchingService {
  url = 'http://ergast.com/api/f1/constructors.json';

  constructor(private http: HttpClient) { super(); }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

  getTransformedData(): Observable<any> {
    return this.getData().pipe(map(
      data => this.mapToCardGenericData(data)
    ))
  }

  mapToCardGenericData(data: any): CardGenericData[] {
    return data;
  }

}
