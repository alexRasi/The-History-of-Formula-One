export abstract class DataFetchingService {
  abstract getData(parameter?: any): any
  abstract getTransformedData(parameter?: any): any
}
