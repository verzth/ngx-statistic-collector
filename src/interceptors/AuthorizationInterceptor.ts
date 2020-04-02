import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {NgxStatisticCollectorConfig} from '../lib/ngx-statistic-collector.config';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor{
  constructor(private config: NgxStatisticCollectorConfig){}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const secureReq = req.clone( {
      headers: req.headers
        .set('Authorization', 'Basic ' + btoa(this.config.getKey() + ':')),
      body: req.body
    });
    return next.handle(secureReq);
  }
}
