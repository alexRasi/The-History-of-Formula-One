import { CardGenericData } from './../../../../models/CardGenericData';
import { SeasonStandingsResponseDTO } from './../../../../models/dtos/SeasonStandingsResponseDTO';
import { Injectable } from '@angular/core';
import { DataFetchingService } from '../data-fetching-base-service/data-fetching.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CardDisplayPageGenericData } from 'src/app/models/CardDisplayPageGenericData';

@Injectable()
export class SeasonStandingsFetchingService extends DataFetchingService {

  constructor(private http: HttpClient) { super(); }

  getData(year: number, limit: number, offset: number): Observable<any> {
    return this.http.get(`http://ergast.com/api/f1/${year.toString()}/driverStandings.json?limit=${limit}&offset=${offset}`);
  }

  getTransformedData(parameter: any, limit: number, offset: number): Observable<any> {
    return this.getData(parameter, limit, offset).pipe(map(
      data => this.mapToCardGenericData(data)
    ))
  }

  mapToCardGenericData(standingsResponse: SeasonStandingsResponseDTO): CardDisplayPageGenericData {
    const cardGenericData: CardGenericData[] = [];
    const titleAbove = standingsResponse.MRData.StandingsTable.season;

    standingsResponse.MRData.StandingsTable.StandingsLists[0].DriverStandings.forEach(
      driver => {

        cardGenericData.push({
          label: '#' + driver.position + ' ' + driver.Driver.givenName + ' ' + driver.Driver.familyName,
          description: driver.Driver.url,
          moreInfoLink: 'drivers/' + driver.Driver.driverId
        })
      }
    )

    return { cards: cardGenericData, title: 'Season Standings', aboveTitle: titleAbove }
  }

}
