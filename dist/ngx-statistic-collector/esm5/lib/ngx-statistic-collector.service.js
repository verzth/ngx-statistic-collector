/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-statistic-collector.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxStatisticCollectorConfig } from './ngx-statistic-collector.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./ngx-statistic-collector.config";
var NgxStatisticCollectorService = /** @class */ (function () {
    function NgxStatisticCollectorService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @param {?} time
     * @param {?} params
     * @return {?}
     */
    NgxStatisticCollectorService.prototype.getHits = /**
     * @param {?} time
     * @param {?} params
     * @return {?}
     */
    function (time, params) {
        return this.http.post(this.config.getHost() + 'hit/' + time, params);
    };
    /**
     * @param {?} time
     * @param {?} params
     * @return {?}
     */
    NgxStatisticCollectorService.prototype.getContents = /**
     * @param {?} time
     * @param {?} params
     * @return {?}
     */
    function (time, params) {
        return this.http.post(this.config.getHost() + 'content/' + time, params);
    };
    /**
     * @param {?} time
     * @param {?} params
     * @return {?}
     */
    NgxStatisticCollectorService.prototype.getEvents = /**
     * @param {?} time
     * @param {?} params
     * @return {?}
     */
    function (time, params) {
        return this.http.post(this.config.getHost() + 'event/' + time, params);
    };
    NgxStatisticCollectorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxStatisticCollectorService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: NgxStatisticCollectorConfig }
    ]; };
    /** @nocollapse */ NgxStatisticCollectorService.ngInjectableDef = i0.defineInjectable({ factory: function NgxStatisticCollectorService_Factory() { return new NgxStatisticCollectorService(i0.inject(i1.HttpClient), i0.inject(i2.NgxStatisticCollectorConfig)); }, token: NgxStatisticCollectorService, providedIn: "root" });
    return NgxStatisticCollectorService;
}());
export { NgxStatisticCollectorService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxStatisticCollectorService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    NgxStatisticCollectorService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXN0YXRpc3RpYy1jb2xsZWN0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2ZXJ6dGgvbmd4LXN0YXRpc3RpYy1jb2xsZWN0b3IvIiwic291cmNlcyI6WyJsaWIvbmd4LXN0YXRpc3RpYy1jb2xsZWN0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBTWhELE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDOzs7O0FBRTdFO0lBS0Usc0NBQW9CLElBQWdCLEVBQVUsTUFBbUM7UUFBN0QsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQTZCO0lBRWpGLENBQUM7Ozs7OztJQUVELDhDQUFPOzs7OztJQUFQLFVBQVEsSUFBWSxFQUFFLE1BQWlCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxHQUFHLElBQUksRUFDckMsTUFBTSxDQUNQLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxrREFBVzs7Ozs7SUFBWCxVQUFZLElBQVksRUFBRSxNQUFxQjtRQUM3QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsR0FBRyxJQUFJLEVBQ3pDLE1BQU0sQ0FDUCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsZ0RBQVM7Ozs7O0lBQVQsVUFBVSxJQUFZLEVBQUUsTUFBbUI7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxRQUFRLEdBQUcsSUFBSSxFQUN2QyxNQUFNLENBQ1AsQ0FBQztJQUNKLENBQUM7O2dCQTVCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVZPLFVBQVU7Z0JBTVYsMkJBQTJCOzs7dUNBUG5DO0NBc0NDLEFBN0JELElBNkJDO1NBMUJZLDRCQUE0Qjs7Ozs7O0lBRTNCLDRDQUF3Qjs7Ozs7SUFBRSw4Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0dlbmVyYWxSZXNwb25zZX0gZnJvbSAnLi4vaW50ZXJmYWNlcy9HZW5lcmFsUmVzcG9uc2UnO1xuaW1wb3J0IEV2ZW50UGFyYW1zIGZyb20gJy4uL2ludGVyZmFjZXMvRXZlbnRQYXJhbXMnO1xuaW1wb3J0IENvbnRlbnRQYXJhbXMgZnJvbSAnLi4vaW50ZXJmYWNlcy9Db250ZW50UGFyYW1zJztcbmltcG9ydCBIaXRQYXJhbXMgZnJvbSAnLi4vaW50ZXJmYWNlcy9IaXRQYXJhbXMnO1xuaW1wb3J0IHtOZ3hTdGF0aXN0aWNDb2xsZWN0b3JDb25maWd9IGZyb20gJy4vbmd4LXN0YXRpc3RpYy1jb2xsZWN0b3IuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4U3RhdGlzdGljQ29sbGVjdG9yU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGNvbmZpZzogTmd4U3RhdGlzdGljQ29sbGVjdG9yQ29uZmlnKSB7XG5cbiAgfVxuXG4gIGdldEhpdHModGltZTogc3RyaW5nLCBwYXJhbXM6IEhpdFBhcmFtcyk6IE9ic2VydmFibGU8R2VuZXJhbFJlc3BvbnNlPGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55PihcbiAgICAgIHRoaXMuY29uZmlnLmdldEhvc3QoKSArICdoaXQvJyArIHRpbWUsXG4gICAgICBwYXJhbXNcbiAgICApO1xuICB9XG5cbiAgZ2V0Q29udGVudHModGltZTogc3RyaW5nLCBwYXJhbXM6IENvbnRlbnRQYXJhbXMpOiBPYnNlcnZhYmxlPEdlbmVyYWxSZXNwb25zZTxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4oXG4gICAgICB0aGlzLmNvbmZpZy5nZXRIb3N0KCkgKyAnY29udGVudC8nICsgdGltZSxcbiAgICAgIHBhcmFtc1xuICAgICk7XG4gIH1cblxuICBnZXRFdmVudHModGltZTogc3RyaW5nLCBwYXJhbXM6IEV2ZW50UGFyYW1zKTogT2JzZXJ2YWJsZTxHZW5lcmFsUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KFxuICAgICAgdGhpcy5jb25maWcuZ2V0SG9zdCgpICsgJ2V2ZW50LycgKyB0aW1lLFxuICAgICAgcGFyYW1zXG4gICAgKTtcbiAgfVxufVxuIl19