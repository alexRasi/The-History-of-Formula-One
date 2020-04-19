import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class DataFetchingService {
  abstract getData(): any
}

@Injectable()
export class SeasonsFetchingService extends DataFetchingService {

  url = 'http://ergast.com/api/f1/seasons.json';

  constructor(private http: HttpClient) { super(); }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }
}

@Injectable()
export class DriversFetchingService extends DataFetchingService {
  url = 'http://ergast.com/api/f1/drivers.json';

  constructor(private http: HttpClient) { super(); }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }
}

@Injectable()
export class ConstructorsFetchingService extends DataFetchingService {
  url = 'http://ergast.com/api/f1/constructors.json';

  constructor(private http: HttpClient) { super(); }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

}
