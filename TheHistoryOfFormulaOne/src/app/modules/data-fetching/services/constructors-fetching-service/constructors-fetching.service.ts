import { ConstructorsResponseDTO } from './../../../../models/dtos/ConstructorsResponseDTO';
import { Injectable } from '@angular/core';
import { DataFetchingService } from '../data-fetching-base-service/data-fetching.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardGenericData } from 'src/app/models/CardGenericData';
import { CardDisplayPageGenericData } from 'src/app/models/CardDisplayPageGenericData';



@Injectable()
export class ConstructorsFetchingService extends DataFetchingService {
  url = 'http://ergast.com/api/f1/constructors.json';

  constructor(private http: HttpClient) { super(); }

  getData(parameter: any, limit: number, offset: number): Observable<any> {
    return this.http.get(`${this.url}?limit=${limit}&offset=${offset}`);
  }

  getTransformedData(parameter: any, limit: number, offset: number): Observable<any> {
    return this.getData(parameter, limit, offset).pipe(map(
      data => this.mapToCardDisplayPageGenericData(data)
    ))
  }

  mapToCardDisplayPageGenericData(constructorsResponse: ConstructorsResponseDTO): CardDisplayPageGenericData {
    const cardGenericData: CardGenericData[] = [];
    const totalData: number = +constructorsResponse.MRData.total;

    constructorsResponse.MRData.ConstructorTable.Constructors.forEach(
      constructor => {
        cardGenericData.push({
          label: constructor.name,
          description: constructor.url,
          moreInfoLink: 'constructors/' + constructor.constructorId
        })
      }
    )

    return {cards: cardGenericData, title: 'Constructors', totalData}
  }

}
