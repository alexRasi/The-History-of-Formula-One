import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFetchingService {

  url = 'http://ergast.com/api/f1/seasons.json';

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get(this.url).subscribe(res => {
      console.log(res);
    })
  }
}
