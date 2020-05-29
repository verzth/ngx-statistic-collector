import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralResponse } from '../interfaces/GeneralResponse';
import EventParams from '../interfaces/EventParams';
import ContentParams from '../interfaces/ContentParams';
import HitParams from '../interfaces/HitParams';
import { NgxStatisticCollectorConfig } from './ngx-statistic-collector.config';
export declare class NgxStatisticCollectorService {
    private http;
    private config;
    constructor(http: HttpClient, config: NgxStatisticCollectorConfig);
    getHits(time: string, params: HitParams): Observable<GeneralResponse<any>>;
    getContents(time: string, params: ContentParams): Observable<GeneralResponse<any>>;
    getEvents(time: string, params: EventParams): Observable<GeneralResponse<any>>;
}
