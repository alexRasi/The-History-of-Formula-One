import { Injectable } from '@angular/core';
import { DataFetchingService } from '../data-fetching-base-service/data-fetching.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SeasonsResponseDTO } from 'src/app/models/dtos/SeasonsReponseDTO';
import { CardGenericData } from 'src/app/models/CardGenericData';
import { CardDisplayPageGenericData } from 'src/app/models/CardDisplayPageGenericData';

@Injectable()
export class SeasonsFetchingService extends DataFetchingService {

  url = 'http://ergast.com/api/f1/seasons.json';

  constructor(private http: HttpClient) { super(); }

  getData(parameter: any, limit: number, offset: number): Observable<any> {
    return this.http.get(`${this.url}?limit=${limit}&offset=${offset}`);
  }

  getTransformedData(parameter: any, limit: number, offset: number): Observable<any> {
    return this.getData(parameter, limit, offset).pipe(map(
      data => this.mapToCardGenericData(data)
    ))
  }

  mapToCardGenericData(seasonsResponse: SeasonsResponseDTO): CardDisplayPageGenericData {
    const cardGenericData: CardGenericData[] = [];

    seasonsResponse.MRData.SeasonTable.Seasons.forEach(
      season => {
        cardGenericData.push({
          label: season.season,
          description: season.url,
          moreInfoLink: 'seasons/season-standings/' + season.season
        })
      }
    )

    return {cards: cardGenericData, title: 'Seasons'}
  }
}
