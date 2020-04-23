import { Observable } from 'rxjs';

export abstract class DataFetchingService<CacheArrayType> {
  CACHE: CacheArrayType[] = [];

  abstract getData(parameter?: any, limit?: number, offset?: number): Observable<any>;
  abstract getTransformedData(parameter?: any, limit?: number, offset?: number): Observable<any>;
}
