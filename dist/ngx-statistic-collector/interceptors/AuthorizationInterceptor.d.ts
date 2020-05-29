import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { NgxStatisticCollectorConfig } from '../lib/ngx-statistic-collector.config';
export declare class AuthorizationInterceptor implements HttpInterceptor {
    private config;
    constructor(config: NgxStatisticCollectorConfig);
    intercept(req: HttpRequest<any>, next: HttpHandler): import("rxjs/internal/Observable").Observable<import("@angular/common/http/src/response").HttpEvent<any>>;
}
