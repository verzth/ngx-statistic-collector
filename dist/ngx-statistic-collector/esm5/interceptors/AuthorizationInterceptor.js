/**
 * @fileoverview added by tsickle
 * Generated from: interceptors/AuthorizationInterceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxStatisticCollectorConfig } from '../lib/ngx-statistic-collector.config';
var AuthorizationInterceptor = /** @class */ (function () {
    function AuthorizationInterceptor(config) {
        this.config = config;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    AuthorizationInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        if (this.config.getKey() != undefined && this.config.getKey() != null) {
            /** @type {?} */
            var secureReq = req.clone({
                headers: req.headers
                    .set('Authorization', 'Basic ' + btoa(this.config.getKey() + ':')),
                body: req.body
            });
            return next.handle(secureReq);
        }
        else
            return next.handle(req);
    };
    AuthorizationInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthorizationInterceptor.ctorParameters = function () { return [
        { type: NgxStatisticCollectorConfig }
    ]; };
    return AuthorizationInterceptor;
}());
export { AuthorizationInterceptor };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthorizationInterceptor.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aG9yaXphdGlvbkludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZlcnp0aC9uZ3gtc3RhdGlzdGljLWNvbGxlY3Rvci8iLCJzb3VyY2VzIjpbImludGVyY2VwdG9ycy9BdXRob3JpemF0aW9uSW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBRWxGO0lBRUUsa0NBQW9CLE1BQW1DO1FBQW5DLFdBQU0sR0FBTixNQUFNLENBQTZCO0lBQUUsQ0FBQzs7Ozs7O0lBQzFELDRDQUFTOzs7OztJQUFULFVBQVUsR0FBcUIsRUFBRSxJQUFpQjtRQUNoRCxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUUsU0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUUsSUFBSSxFQUFDOztnQkFDekQsU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUU7Z0JBQzNCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztxQkFDZixHQUFHLENBQUMsZUFBZSxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2FBQ2YsQ0FBQztZQUNGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQjs7WUFBSyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBWkYsVUFBVTs7OztnQkFGSCwyQkFBMkI7O0lBZW5DLCtCQUFDO0NBQUEsQUFiRCxJQWFDO1NBWlksd0JBQXdCOzs7Ozs7SUFDdkIsMENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3R9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Tmd4U3RhdGlzdGljQ29sbGVjdG9yQ29uZmlnfSBmcm9tICcuLi9saWIvbmd4LXN0YXRpc3RpYy1jb2xsZWN0b3IuY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhvcml6YXRpb25JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvcntcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IE5neFN0YXRpc3RpY0NvbGxlY3RvckNvbmZpZyl7fVxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcikge1xuICAgIGlmKHRoaXMuY29uZmlnLmdldEtleSgpIT11bmRlZmluZWQgJiYgdGhpcy5jb25maWcuZ2V0S2V5KCkhPW51bGwpe1xuICAgICAgY29uc3Qgc2VjdXJlUmVxID0gcmVxLmNsb25lKCB7XG4gICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBidG9hKHRoaXMuY29uZmlnLmdldEtleSgpICsgJzonKSksXG4gICAgICAgIGJvZHk6IHJlcS5ib2R5XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShzZWN1cmVSZXEpO1xuICAgIH1lbHNlIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICB9XG59XG4iXX0=