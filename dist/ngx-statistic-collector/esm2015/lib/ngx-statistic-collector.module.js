/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-statistic-collector.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgxStatisticCollectorService } from './ngx-statistic-collector.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationInterceptor } from '../interceptors/AuthorizationInterceptor';
import { NgxStatisticCollectorConfig } from './ngx-statistic-collector.config';
export class NgxStatisticCollectorModule {
}
NgxStatisticCollectorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [],
                exports: [],
                providers: [
                    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true },
                    { provide: NgxStatisticCollectorService, useClass: NgxStatisticCollectorService },
                    { provide: NgxStatisticCollectorConfig, useClass: NgxStatisticCollectorConfig },
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXN0YXRpc3RpYy1jb2xsZWN0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZlcnp0aC9uZ3gtc3RhdGlzdGljLWNvbGxlY3Rvci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtc3RhdGlzdGljLWNvbGxlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQy9FLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xGLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBYzdFLE1BQU0sT0FBTywyQkFBMkI7OztZQVZ2QyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFNBQVMsRUFBRTtvQkFDVCxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztvQkFDN0UsRUFBQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFDO29CQUMvRSxFQUFDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsMkJBQTJCLEVBQUM7aUJBQzlFO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ3hTdGF0aXN0aWNDb2xsZWN0b3JTZXJ2aWNlfSBmcm9tICcuL25neC1zdGF0aXN0aWMtY29sbGVjdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SU30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtBdXRob3JpemF0aW9uSW50ZXJjZXB0b3J9IGZyb20gJy4uL2ludGVyY2VwdG9ycy9BdXRob3JpemF0aW9uSW50ZXJjZXB0b3InO1xuaW1wb3J0IHtOZ3hTdGF0aXN0aWNDb2xsZWN0b3JDb25maWd9IGZyb20gJy4vbmd4LXN0YXRpc3RpYy1jb2xsZWN0b3IuY29uZmlnJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogQXV0aG9yaXphdGlvbkludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZX0sXG4gICAge3Byb3ZpZGU6IE5neFN0YXRpc3RpY0NvbGxlY3RvclNlcnZpY2UsIHVzZUNsYXNzOiBOZ3hTdGF0aXN0aWNDb2xsZWN0b3JTZXJ2aWNlfSxcbiAgICB7cHJvdmlkZTogTmd4U3RhdGlzdGljQ29sbGVjdG9yQ29uZmlnLCB1c2VDbGFzczogTmd4U3RhdGlzdGljQ29sbGVjdG9yQ29uZmlnfSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hTdGF0aXN0aWNDb2xsZWN0b3JNb2R1bGUgeyB9XG4iXX0=