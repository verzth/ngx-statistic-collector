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
export { NgxStatisticCollectorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXN0YXRpc3RpYy1jb2xsZWN0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZlcnp0aC9uZ3gtc3RhdGlzdGljLWNvbGxlY3Rvci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtc3RhdGlzdGljLWNvbGxlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQy9FLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xGLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBSTdFO0lBQUE7SUFVMkMsQ0FBQzs7Z0JBVjNDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsU0FBUyxFQUFFO3dCQUNULEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO3dCQUM3RSxFQUFDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUM7d0JBQy9FLEVBQUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBQztxQkFDOUU7aUJBQ0Y7O0lBQzBDLGtDQUFDO0NBQUEsQUFWNUMsSUFVNEM7U0FBL0IsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Tmd4U3RhdGlzdGljQ29sbGVjdG9yU2VydmljZX0gZnJvbSAnLi9uZ3gtc3RhdGlzdGljLWNvbGxlY3Rvci5zZXJ2aWNlJztcbmltcG9ydCB7SFRUUF9JTlRFUkNFUFRPUlN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7QXV0aG9yaXphdGlvbkludGVyY2VwdG9yfSBmcm9tICcuLi9pbnRlcmNlcHRvcnMvQXV0aG9yaXphdGlvbkludGVyY2VwdG9yJztcbmltcG9ydCB7Tmd4U3RhdGlzdGljQ29sbGVjdG9yQ29uZmlnfSBmcm9tICcuL25neC1zdGF0aXN0aWMtY29sbGVjdG9yLmNvbmZpZyc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEF1dGhvcml6YXRpb25JbnRlcmNlcHRvciwgbXVsdGk6IHRydWV9LFxuICAgIHtwcm92aWRlOiBOZ3hTdGF0aXN0aWNDb2xsZWN0b3JTZXJ2aWNlLCB1c2VDbGFzczogTmd4U3RhdGlzdGljQ29sbGVjdG9yU2VydmljZX0sXG4gICAge3Byb3ZpZGU6IE5neFN0YXRpc3RpY0NvbGxlY3RvckNvbmZpZywgdXNlQ2xhc3M6IE5neFN0YXRpc3RpY0NvbGxlY3RvckNvbmZpZ30sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4U3RhdGlzdGljQ29sbGVjdG9yTW9kdWxlIHsgfVxuIl19