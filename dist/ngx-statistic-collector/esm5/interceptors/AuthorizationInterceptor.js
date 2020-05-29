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
        /** @type {?} */
        var secureReq = req.clone({
            headers: req.headers
                .set('Authorization', 'Basic ' + btoa(this.config.getKey() + ':')),
            body: req.body
        });
        return next.handle(secureReq);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aG9yaXphdGlvbkludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZlcnp0aC9uZ3gtc3RhdGlzdGljLWNvbGxlY3Rvci8iLCJzb3VyY2VzIjpbImludGVyY2VwdG9ycy9BdXRob3JpemF0aW9uSW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBRWxGO0lBRUUsa0NBQW9CLE1BQW1DO1FBQW5DLFdBQU0sR0FBTixNQUFNLENBQTZCO0lBQUUsQ0FBQzs7Ozs7O0lBQzFELDRDQUFTOzs7OztJQUFULFVBQVUsR0FBcUIsRUFBRSxJQUFpQjs7WUFDMUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUU7WUFDM0IsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO2lCQUNqQixHQUFHLENBQUMsZUFBZSxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNwRSxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7U0FDZixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQVZGLFVBQVU7Ozs7Z0JBRkgsMkJBQTJCOztJQWFuQywrQkFBQztDQUFBLEFBWEQsSUFXQztTQVZZLHdCQUF3Qjs7Ozs7O0lBQ3ZCLDBDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge05neFN0YXRpc3RpY0NvbGxlY3RvckNvbmZpZ30gZnJvbSAnLi4vbGliL25neC1zdGF0aXN0aWMtY29sbGVjdG9yLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRob3JpemF0aW9uSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3J7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBOZ3hTdGF0aXN0aWNDb2xsZWN0b3JDb25maWcpe31cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpIHtcbiAgICBjb25zdCBzZWN1cmVSZXEgPSByZXEuY2xvbmUoIHtcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzXG4gICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIGJ0b2EodGhpcy5jb25maWcuZ2V0S2V5KCkgKyAnOicpKSxcbiAgICAgIGJvZHk6IHJlcS5ib2R5XG4gICAgfSk7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHNlY3VyZVJlcSk7XG4gIH1cbn1cbiJdfQ==