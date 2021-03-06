import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-statistic-collector.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxStatisticCollectorConfig = /** @class */ (function () {
    function NgxStatisticCollectorConfig() {
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} host
     * @return {THIS}
     */
    NgxStatisticCollectorConfig.prototype.setHost = /**
     * @template THIS
     * @this {THIS}
     * @param {?} host
     * @return {THIS}
     */
    function (host) {
        (/** @type {?} */ (this)).host = host;
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    NgxStatisticCollectorConfig.prototype.getHost = /**
     * @return {?}
     */
    function () {
        return this.host;
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @return {THIS}
     */
    NgxStatisticCollectorConfig.prototype.setKey = /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @return {THIS}
     */
    function (key) {
        (/** @type {?} */ (this)).key = key;
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    NgxStatisticCollectorConfig.prototype.getKey = /**
     * @return {?}
     */
    function () {
        return this.key;
    };
    NgxStatisticCollectorConfig.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    NgxStatisticCollectorConfig.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxStatisticCollectorConfig.ngInjectableDef = defineInjectable({ factory: function NgxStatisticCollectorConfig_Factory() { return new NgxStatisticCollectorConfig(); }, token: NgxStatisticCollectorConfig, providedIn: "root" });
    return NgxStatisticCollectorConfig;
}());
/** @type {?} */
var TIME = {
    HOURLY: 'hourly',
    DAILY: 'daily',
    WEEKLY: 'weekly',
    MONTHLY: 'monthly',
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-statistic-collector.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ NgxStatisticCollectorService.ngInjectableDef = defineInjectable({ factory: function NgxStatisticCollectorService_Factory() { return new NgxStatisticCollectorService(inject(HttpClient), inject(NgxStatisticCollectorConfig)); }, token: NgxStatisticCollectorService, providedIn: "root" });
    return NgxStatisticCollectorService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: interceptors/AuthorizationInterceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-statistic-collector.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxStatisticCollectorModule = /** @class */ (function () {
    function NgxStatisticCollectorModule() {
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
    return NgxStatisticCollectorModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: verzth-ngx-statistic-collector.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxStatisticCollectorService, NgxStatisticCollectorModule, NgxStatisticCollectorConfig, TIME, AuthorizationInterceptor as ɵa };

//# sourceMappingURL=verzth-ngx-statistic-collector.js.map