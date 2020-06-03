import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-statistic-collector.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxStatisticCollectorConfig {
    constructor() { }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} host
     * @return {THIS}
     */
    setHost(host) {
        (/** @type {?} */ (this)).host = host;
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    getHost() {
        return this.host;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @return {THIS}
     */
    setKey(key) {
        (/** @type {?} */ (this)).key = key;
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    getKey() {
        return this.key;
    }
}
NgxStatisticCollectorConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
NgxStatisticCollectorConfig.ctorParameters = () => [];
/** @nocollapse */ NgxStatisticCollectorConfig.ngInjectableDef = defineInjectable({ factory: function NgxStatisticCollectorConfig_Factory() { return new NgxStatisticCollectorConfig(); }, token: NgxStatisticCollectorConfig, providedIn: "root" });
/** @type {?} */
const TIME = {
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
class NgxStatisticCollectorService {
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
/** @nocollapse */ NgxStatisticCollectorService.ngInjectableDef = defineInjectable({ factory: function NgxStatisticCollectorService_Factory() { return new NgxStatisticCollectorService(inject(HttpClient), inject(NgxStatisticCollectorConfig)); }, token: NgxStatisticCollectorService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: interceptors/AuthorizationInterceptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthorizationInterceptor {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        /** @type {?} */
        const secureReq = req.clone({
            headers: req.headers
                .set('Authorization', 'Basic ' + btoa(this.config.getKey() + ':')),
            body: req.body
        });
        return next.handle(secureReq);
    }
}
AuthorizationInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthorizationInterceptor.ctorParameters = () => [
    { type: NgxStatisticCollectorConfig }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-statistic-collector.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxStatisticCollectorModule {
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