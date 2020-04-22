import { ItemGenericDetail } from './../../../../models/ItemGenericDetail';
import { Observable } from 'rxjs';
import { CardGenericData } from './../../../../models/CardGenericData';
import { CardDisplayPageGenericData } from 'src/app/models/CardDisplayPageGenericData';
export abstract class DataFetchingService {
  abstract getData(parameter?: any, limit?: number, offset?: number): any
  abstract getTransformedData(parameter?: any, limit?: number, offset?: number): any
}
