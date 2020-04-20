import { Injectable } from '@angular/core';
import { DataFetchingService } from '../data-fetching-base-service/data-fetching.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SeasonsResponseDTO } from 'src/app/models/dtos/SeasonsReponseDTO';
import { CardGenericData } from 'src/app/models/CardGenericData';

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
