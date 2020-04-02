import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GeneralResponse} from '../interfaces/GeneralResponse';
import EventParams from '../interfaces/EventParams';
import ContentParams from '../interfaces/ContentParams';
import HitParams from '../interfaces/HitParams';
import {NgxStatisticCollectorConfig} from './ngx-statistic-collector.config';

@Injectable({
  providedIn: 'root'
})
export class NgxStatisticCollectorService {

  constructor(private http: HttpClient, private config: NgxStatisticCollectorConfig) {

  }

  getHits(time: string, params: HitParams): Observable<GeneralResponse<any>> {
    return this.http.post<any>(
      this.config.getHost() + 'hit/' + time,
      params
    );
  }

  getContents(time: string, params: ContentParams): Observable<GeneralResponse<any>> {
    return this.http.post<any>(
      this.config.getHost() + 'content/' + time,
      params
    );
  }

  getEvents(time: string, params: EventParams): Observable<GeneralResponse<any>> {
    return this.http.post<any>(
      this.config.getHost() + 'event/' + time,
      params
    );
  }
}
