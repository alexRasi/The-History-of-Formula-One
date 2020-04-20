import { Injectable } from '@angular/core';
import { DataFetchingService } from '../data-fetching-base-service/data-fetching.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardGenericData } from 'src/app/models/CardGenericData';



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
