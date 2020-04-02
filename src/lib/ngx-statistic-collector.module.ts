import { NgModule } from '@angular/core';
import {NgxStatisticCollectorService} from './ngx-statistic-collector.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthorizationInterceptor} from '../interceptors/AuthorizationInterceptor';
import {NgxStatisticCollectorConfig} from './ngx-statistic-collector.config';



@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true},
    {provide: NgxStatisticCollectorService, useClass: NgxStatisticCollectorService},
    {provide: NgxStatisticCollectorConfig, useClass: NgxStatisticCollectorConfig},
  ]
})
export class NgxStatisticCollectorModule { }
