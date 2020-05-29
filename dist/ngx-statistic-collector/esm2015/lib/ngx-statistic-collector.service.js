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
export class NgxStatisticCollectorService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @param {?} time
     * @param {?} params
     * @return {?}
     */
    getHits(time, params) {
        return this.http.post(this.config.getHost() + 'hit/' + time, params);
    }
    /**
     * @param {?} time
     * @param {?} params
     * @return {?}
     */
    getContents(time, params) {
        return this.http.post(this.config.getHost() + 'content/' + time, params);
    }
    /**
     * @param {?} time
     * @param {?} params
     * @return {?}
     */
    getEvents(time, params) {
        return this.http.post(this.config.getHost() + 'event/' + time, params);
    }
}
NgxStatisticCollectorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxStatisticCollectorService.ctorParameters = () => [
    { type: HttpClient },
    { type: NgxStatisticCollectorConfig }
];
/** @nocollapse */ NgxStatisticCollectorService.ngInjectableDef = i0.defineInjectable({ factory: function NgxStatisticCollectorService_Factory() { return new NgxStatisticCollectorService(i0.inject(i1.HttpClient), i0.inject(i2.NgxStatisticCollectorConfig)); }, token: NgxStatisticCollectorService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXN0YXRpc3RpYy1jb2xsZWN0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2ZXJ6dGgvbmd4LXN0YXRpc3RpYy1jb2xsZWN0b3IvIiwic291cmNlcyI6WyJsaWIvbmd4LXN0YXRpc3RpYy1jb2xsZWN0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBTWhELE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDOzs7O0FBSzdFLE1BQU0sT0FBTyw0QkFBNEI7Ozs7O0lBRXZDLFlBQW9CLElBQWdCLEVBQVUsTUFBbUM7UUFBN0QsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQTZCO0lBRWpGLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxJQUFZLEVBQUUsTUFBaUI7UUFDckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLEdBQUcsSUFBSSxFQUNyQyxNQUFNLENBQ1AsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELFdBQVcsQ0FBQyxJQUFZLEVBQUUsTUFBcUI7UUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxVQUFVLEdBQUcsSUFBSSxFQUN6QyxNQUFNLENBQ1AsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxJQUFZLEVBQUUsTUFBbUI7UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxRQUFRLEdBQUcsSUFBSSxFQUN2QyxNQUFNLENBQ1AsQ0FBQztJQUNKLENBQUM7OztZQTVCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFWTyxVQUFVO1lBTVYsMkJBQTJCOzs7Ozs7OztJQU9yQiw0Q0FBd0I7Ozs7O0lBQUUsOENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtHZW5lcmFsUmVzcG9uc2V9IGZyb20gJy4uL2ludGVyZmFjZXMvR2VuZXJhbFJlc3BvbnNlJztcbmltcG9ydCBFdmVudFBhcmFtcyBmcm9tICcuLi9pbnRlcmZhY2VzL0V2ZW50UGFyYW1zJztcbmltcG9ydCBDb250ZW50UGFyYW1zIGZyb20gJy4uL2ludGVyZmFjZXMvQ29udGVudFBhcmFtcyc7XG5pbXBvcnQgSGl0UGFyYW1zIGZyb20gJy4uL2ludGVyZmFjZXMvSGl0UGFyYW1zJztcbmltcG9ydCB7Tmd4U3RhdGlzdGljQ29sbGVjdG9yQ29uZmlnfSBmcm9tICcuL25neC1zdGF0aXN0aWMtY29sbGVjdG9yLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFN0YXRpc3RpY0NvbGxlY3RvclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBjb25maWc6IE5neFN0YXRpc3RpY0NvbGxlY3RvckNvbmZpZykge1xuXG4gIH1cblxuICBnZXRIaXRzKHRpbWU6IHN0cmluZywgcGFyYW1zOiBIaXRQYXJhbXMpOiBPYnNlcnZhYmxlPEdlbmVyYWxSZXNwb25zZTxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4oXG4gICAgICB0aGlzLmNvbmZpZy5nZXRIb3N0KCkgKyAnaGl0LycgKyB0aW1lLFxuICAgICAgcGFyYW1zXG4gICAgKTtcbiAgfVxuXG4gIGdldENvbnRlbnRzKHRpbWU6IHN0cmluZywgcGFyYW1zOiBDb250ZW50UGFyYW1zKTogT2JzZXJ2YWJsZTxHZW5lcmFsUmVzcG9uc2U8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KFxuICAgICAgdGhpcy5jb25maWcuZ2V0SG9zdCgpICsgJ2NvbnRlbnQvJyArIHRpbWUsXG4gICAgICBwYXJhbXNcbiAgICApO1xuICB9XG5cbiAgZ2V0RXZlbnRzKHRpbWU6IHN0cmluZywgcGFyYW1zOiBFdmVudFBhcmFtcyk6IE9ic2VydmFibGU8R2VuZXJhbFJlc3BvbnNlPGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55PihcbiAgICAgIHRoaXMuY29uZmlnLmdldEhvc3QoKSArICdldmVudC8nICsgdGltZSxcbiAgICAgIHBhcmFtc1xuICAgICk7XG4gIH1cbn1cbiJdfQ==