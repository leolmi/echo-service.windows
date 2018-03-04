webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cover_cover_component__ = __webpack_require__("../../../../../src/app/pages/cover/cover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_scenario_scenario_component__ = __webpack_require__("../../../../../src/app/pages/scenario/scenario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_documents_documents_component__ = __webpack_require__("../../../../../src/app/pages/documents/documents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_connections_connections_component__ = __webpack_require__("../../../../../src/app/pages/connections/connections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_queries_queries_component__ = __webpack_require__("../../../../../src/app/pages/queries/queries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_previews_previews_component__ = __webpack_require__("../../../../../src/app/pages/previews/previews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_custom_custom_component__ = __webpack_require__("../../../../../src/app/pages/custom/custom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_nocontent_nocontent_component__ = __webpack_require__("../../../../../src/app/pages/nocontent/nocontent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings_component__ = __webpack_require__("../../../../../src/app/pages/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_help_help_component__ = __webpack_require__("../../../../../src/app/pages/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_browser_browser_component__ = __webpack_require__("../../../../../src/app/components/browser/browser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_slow_query_slow_query_component__ = __webpack_require__("../../../../../src/app/pages/slow-query/slow-query.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_log_log_component__ = __webpack_require__("../../../../../src/app/pages/log/log.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: '/cover', pathMatch: 'full' },
    { path: 'cover', component: __WEBPACK_IMPORTED_MODULE_2__pages_cover_cover_component__["a" /* CoverComponent */] },
    { path: 'scenario', component: __WEBPACK_IMPORTED_MODULE_3__pages_scenario_scenario_component__["a" /* ScenarioComponent */] },
    { path: 'documents/:id', component: __WEBPACK_IMPORTED_MODULE_4__pages_documents_documents_component__["a" /* DocumentsComponent */] },
    { path: 'connections/:id', component: __WEBPACK_IMPORTED_MODULE_5__pages_connections_connections_component__["a" /* ConnectionsComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_12__components_browser_browser_component__["b" /* CanDeactivateEditor */]] },
    { path: 'queries/:id', component: __WEBPACK_IMPORTED_MODULE_6__pages_queries_queries_component__["a" /* QueriesComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_12__components_browser_browser_component__["b" /* CanDeactivateEditor */]] },
    { path: 'previews/:id', component: __WEBPACK_IMPORTED_MODULE_7__pages_previews_previews_component__["a" /* PreviewsComponent */] },
    { path: 'custom/:id', component: __WEBPACK_IMPORTED_MODULE_8__pages_custom_custom_component__["a" /* CustomComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_12__components_browser_browser_component__["b" /* CanDeactivateEditor */]] },
    { path: 'slowquery', component: __WEBPACK_IMPORTED_MODULE_13__pages_slow_query_slow_query_component__["a" /* SlowQueryComponent */] },
    { path: 'log', component: __WEBPACK_IMPORTED_MODULE_14__pages_log_log_component__["a" /* LogComponent */] },
    { path: 'help/:id', component: __WEBPACK_IMPORTED_MODULE_11__pages_help_help_component__["a" /* HelpComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings_component__["a" /* SettingsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__pages_nocontent_nocontent_component__["a" /* NoContentComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_12__components_browser_browser_component__["b" /* CanDeactivateEditor */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var fadeAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* trigger */])('fadeAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('* => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('2s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 1 }))
        ], { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  overflow: hidden;\r\n  height: 100vh; }\r\n  :host main {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    position: relative; }\r\n  :host /deep/ router-outlet ~ * {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%; }\r\n\r\n.app-toolbar {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  z-index: 100; }\r\n  .app-toolbar .divider {\r\n    margin: 0 16px;\r\n    border-left: rgba(200, 200, 200, 0.7) 1px solid;\r\n    height: 100%; }\r\n  .app-toolbar .scenario-name {\r\n    position: absolute;\r\n    text-align: center;\r\n    opacity: .4;\r\n    font-size: 2em;\r\n    width: 100%;\r\n    pointer-events: none; }\r\n\r\n.mat-drawer-container {\r\n  background-color: inherit;\r\n  color: inherit;\r\n  pointer-events: none; }\r\n\r\n.cart-container {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0; }\r\n  .cart-container .mat-drawer.cart {\r\n    width: 300px;\r\n    pointer-events: all;\r\n    padding: 80px 20px 0 20px; }\r\n\r\n.app-back-button {\r\n  position: fixed;\r\n  bottom: 50px;\r\n  right: 50px;\r\n  opacity: .2; }\r\n  .app-back-button:hover {\r\n    opacity: 1;\r\n    z-index: 1000; }\r\n\r\n.app-error {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0; }\r\n  .app-error .app-error-content {\r\n    top: 50%;\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: rgba(133, 10, 0, 0.85);\r\n    z-index: 200;\r\n    position: absolute;\r\n    padding: 30px 0;\r\n    cursor: pointer; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"app-toolbar mat-elevation-z6\" *ngIf=\"isShowToolbar()\" color=\"primary\">\n  <button mat-icon-button (click)=\"exit()\" matTooltip=\"Back to cover\">\n    <mat-icon aria-label=\"toolbar button\">power_settings_new</mat-icon>\n  </button>\n  <ng-container *ngFor=\"let page of left_pages\">\n    <button *ngIf=\"!page.divider && !page.caption\" color=\"{{page.selected?'warn':''}}\" mat-icon-button\n            [ngClass]=\"{'mat-mini-fab':page.selected}\" (click)=\"select(page)\"\n            matTooltip=\"{{page.tooltip}}\">\n      <mat-icon aria-label=\"toolbar button\">{{page.icon}}</mat-icon>\n    </button>\n    <button *ngIf=\"!page.divider && page.caption\" color=\"{{page.selected?'warn':''}}\" mat-button\n            [ngClass]=\"{'mat-raised-button mat-warn':page.selected}\" (click)=\"select(page)\">\n      <mat-icon *ngIf=\"page.icon\" aria-label=\"toolbar button\">{{page.icon}}</mat-icon>\n      {{page.caption}}\n    </button>\n    <div *ngIf=\"!!page.divider\" class=\"divider\"></div>\n  </ng-container>\n  <span class=\"flex\"></span>\n  <span class=\"scenario-name\">{{((info||{}).scenario||{}).name}}</span>\n  <ng-container *ngFor=\"let page of right_pages\">\n    <button *ngIf=\"!page.divider && !page.caption\" color=\"{{page.selected?'warn':''}}\" mat-icon-button\n            [ngClass]=\"{'mat-mini-fab':page.selected}\" (click)=\"select(page)\"\n            matTooltip=\"{{page.tooltip}}\">\n      <mat-icon aria-label=\"toolbar button\">{{page.icon}}</mat-icon>\n    </button>\n    <button *ngIf=\"!page.divider && page.caption\" color=\"{{page.selected?'warn':''}}\" mat-button\n            [ngClass]=\"{'mat-raised-button mat-warn':page.selected}\" (click)=\"select(page)\">\n      <mat-icon *ngIf=\"page.icon\" aria-label=\"toolbar button\">{{page.icon}}</mat-icon>\n      {{page.caption}}\n    </button>\n    <div *ngIf=\"!!page.divider\" class=\"divider\"></div>\n  </ng-container>\n  <button mat-icon-button (click)=\"cart.toggle()\" matTooltip=\"show cart\" color=\"{{cart.opened?'warn':''}}\">\n    <mat-icon aria-label=\"cart button\">shopping_cart</mat-icon>\n    <div *ngIf=\"!!cartS.count()\" class=\"button-badge\">{{cartS.count()}}</div>\n  </button>\n</mat-toolbar>\n<main [@fadeAnimation]=\"getRouterOutletState(o)\">\n  <router-outlet #o=\"outlet\"></router-outlet>\n</main>\n<button class=\"app-back-button\" *ngIf=\"back\" (click)=\"goBack()\"\n        mat-fab matTooltip=\"Back to previous page\">\n  <mat-icon aria-label=\"toolbar button\">navigate_before</mat-icon>\n</button>\n<div class=\"app-error\" *ngIf=\"!!u.err\">\n  <div class=\"app-error-content\" (click)=\"u.err = null\">{{u.err}}</div>\n</div>\n<mat-drawer-container class=\"cart-container\">\n  <mat-drawer class=\"cart\" #cart mode=\"side\">\n    <app-cart></app-cart>\n  </mat-drawer>\n</mat-drawer-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_animations__ = __webpack_require__("../../../../../src/app/app.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_pages_service__ = __webpack_require__("../../../../../src/app/services/app-pages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_interaction_service__ = __webpack_require__("../../../../../src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var route_cache = {
    backs: ['/settings'],
    last: null
};
var AppComponent = (function () {
    function AppComponent(router, app, interaction, u, cartS) {
        var _this = this;
        this.router = router;
        this.app = app;
        this.interaction = interaction;
        this.u = u;
        this.cartS = cartS;
        this.info = {};
        this.error = null;
        this.back = '';
        this.loading = false;
        this.left_pages = __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.filter(this.app.pages, function (p) { return !p.hidden && p.left; });
        this.right_pages = __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.filter(this.app.pages, function (p) { return !p.hidden && !p.left; });
        var self = this;
        self.loading = true;
        router.events.subscribe(function (event) {
            var url = event['url'];
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* NavigationEnd */]) {
                _this.back = (route_cache.backs.indexOf(url) > -1) ? route_cache.last : null;
                route_cache.last = url;
                var target = __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.find(app.pages, function (p) { return (url || '').indexOf('/' + p.type) === 0; }) || {};
                var current = __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.find(app.pages, function (p) { return p.selected; }) || {};
                if (target !== current) {
                    current.selected = false;
                    target.selected = true;
                }
                _this.cart.opened = false;
            }
        });
    }
    AppComponent.prototype.refresh = function () {
        var self = this;
        self.loading = true;
        self.error = null;
        self.interaction.getInfo().subscribe(function (data) {
            self.info = data;
            self.loading = false;
        }, function (err) {
            self.info = {};
            console.error(err);
            self.error = self.u.getErrorMessage(err);
            self.loading = false;
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AppComponent.prototype.apply = function (scenario, cb) {
        var self = this;
        self.interaction.setScenario(scenario, function () {
            self.refresh();
            cb();
        });
    };
    AppComponent.prototype.update = function (scenario, cb) {
        var self = this;
        self.interaction.saveScenario(scenario, function () {
            self.refresh();
            cb();
        });
    };
    AppComponent.prototype.select = function (page) {
        var current = __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.find(this.app.pages, function (p) { return p.selected; });
        var self = this;
        if (current !== page) {
            self.router.navigate(['/' + page.type + (page.path || '')]);
        }
    };
    AppComponent.prototype.getRouterOutletState = function (outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    };
    AppComponent.prototype.isShowToolbar = function () {
        return this.router.url !== '/cover';
    };
    AppComponent.prototype.exit = function () {
        this.router.navigate(['/']);
    };
    AppComponent.prototype.goBack = function () {
        var _this = this;
        if (this.back) {
            this.u.parseUrlId(this.back, function (url, id) {
                var target = id ? [url, id] : [url];
                _this.router.navigate(target);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cart'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "cart", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__app_animations__["a" /* fadeAnimation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_app_pages_service__["a" /* AppPagesService */],
            __WEBPACK_IMPORTED_MODULE_4__services_interaction_service__["a" /* InteractionService */],
            __WEBPACK_IMPORTED_MODULE_5__services_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_6__services_cart_service__["a" /* CartService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_clipboard__ = __webpack_require__("../../../../ngx-clipboard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("../../../../@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_codemirror__ = __webpack_require__("../../../../ng2-codemirror/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_codemirror___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_codemirror__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_app_pages_service__ = __webpack_require__("../../../../../src/app/services/app-pages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_interaction_service__ = __webpack_require__("../../../../../src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_browser_service__ = __webpack_require__("../../../../../src/app/services/browser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_settings_service__ = __webpack_require__("../../../../../src/app/services/user-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_schema_cache_service__ = __webpack_require__("../../../../../src/app/services/schema-cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_browser_browser_component__ = __webpack_require__("../../../../../src/app/components/browser/browser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_page_header_page_header_component__ = __webpack_require__("../../../../../src/app/components/page-header/page-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_debug_pre_debug_pre_component__ = __webpack_require__("../../../../../src/app/components/debug-pre/debug-pre.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_new_element_new_element_component__ = __webpack_require__("../../../../../src/app/components/new-element/new-element.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_schema_browser_schema_browser_component__ = __webpack_require__("../../../../../src/app/components/schema-browser/schema-browser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_object_viewer_object_viewer_component__ = __webpack_require__("../../../../../src/app/components/object-viewer/object-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_help_browser_help_browser_component__ = __webpack_require__("../../../../../src/app/components/help-browser/help-browser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_parameter_editor_parameter_editor_component__ = __webpack_require__("../../../../../src/app/components/parameter-editor/parameter-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_value_editor_value_editor_component__ = __webpack_require__("../../../../../src/app/components/value-editor/value-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_api_tester_api_tester_component__ = __webpack_require__("../../../../../src/app/components/api-tester/api-tester.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_monitor_monitor_component__ = __webpack_require__("../../../../../src/app/components/monitor/monitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__directives_lock_scroll_directive__ = __webpack_require__("../../../../../src/app/directives/lock-scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__directives_auto_scroll_directive__ = __webpack_require__("../../../../../src/app/directives/auto-scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_scenario_scenario_component__ = __webpack_require__("../../../../../src/app/pages/scenario/scenario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_cover_cover_component__ = __webpack_require__("../../../../../src/app/pages/cover/cover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_nocontent_nocontent_component__ = __webpack_require__("../../../../../src/app/pages/nocontent/nocontent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_documents_documents_component__ = __webpack_require__("../../../../../src/app/pages/documents/documents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_custom_custom_component__ = __webpack_require__("../../../../../src/app/pages/custom/custom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_queries_queries_component__ = __webpack_require__("../../../../../src/app/pages/queries/queries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_connections_connections_component__ = __webpack_require__("../../../../../src/app/pages/connections/connections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_previews_previews_component__ = __webpack_require__("../../../../../src/app/pages/previews/previews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_settings_settings_component__ = __webpack_require__("../../../../../src/app/pages/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_help_help_component__ = __webpack_require__("../../../../../src/app/pages/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_slow_query_slow_query_component__ = __webpack_require__("../../../../../src/app/pages/slow-query/slow-query.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_log_log_component__ = __webpack_require__("../../../../../src/app/pages/log/log.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_help_pages_api_help_component__ = __webpack_require__("../../../../../src/app/pages/help/pages/api-help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_help_pages_scenario_help_component__ = __webpack_require__("../../../../../src/app/pages/help/pages/scenario-help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_help_pages_documents_help_component__ = __webpack_require__("../../../../../src/app/pages/help/pages/documents-help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_help_pages_connections_help_component__ = __webpack_require__("../../../../../src/app/pages/help/pages/connections-help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_help_pages_queries_help_component__ = __webpack_require__("../../../../../src/app/pages/help/pages/queries-help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_help_pages_previews_help_component__ = __webpack_require__("../../../../../src/app/pages/help/pages/previews-help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_help_pages_custom_help_component__ = __webpack_require__("../../../../../src/app/pages/help/pages/custom-help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_help_pages_slowquery_help_component__ = __webpack_require__("../../../../../src/app/pages/help/pages/slowquery-help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_fields_browser_fields_browser_component__ = __webpack_require__("../../../../../src/app/components/fields-browser/fields-browser.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// SERVICES









// COMPONENTS













// DIRECTIVES


// PAGES












// HELP









var AppModule = (function () {
    function AppModule(matIconRegistry, domSanitizer) {
        // matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_33__directives_lock_scroll_directive__["a" /* LockScrollDirective */],
                __WEBPACK_IMPORTED_MODULE_34__directives_auto_scroll_directive__["a" /* AutoScrollDirective */],
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_35__pages_scenario_scenario_component__["a" /* ScenarioComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pages_cover_cover_component__["a" /* CoverComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_browser_browser_component__["a" /* BrowserComponent */],
                __WEBPACK_IMPORTED_MODULE_37__pages_nocontent_nocontent_component__["a" /* NoContentComponent */],
                __WEBPACK_IMPORTED_MODULE_38__pages_documents_documents_component__["a" /* DocumentsComponent */],
                __WEBPACK_IMPORTED_MODULE_39__pages_custom_custom_component__["a" /* CustomComponent */],
                __WEBPACK_IMPORTED_MODULE_40__pages_queries_queries_component__["a" /* QueriesComponent */],
                __WEBPACK_IMPORTED_MODULE_41__pages_connections_connections_component__["a" /* ConnectionsComponent */],
                __WEBPACK_IMPORTED_MODULE_42__pages_previews_previews_component__["a" /* PreviewsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_page_header_page_header_component__["a" /* PageHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_debug_pre_debug_pre_component__["a" /* DebugPreComponent */],
                __WEBPACK_IMPORTED_MODULE_43__pages_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_new_element_new_element_component__["a" /* NewElementComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_schema_browser_schema_browser_component__["a" /* SchemaBrowserComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_parameter_editor_parameter_editor_component__["a" /* ParameterEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_value_editor_value_editor_component__["a" /* ValueEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_44__pages_help_help_component__["a" /* HelpComponent */],
                __WEBPACK_IMPORTED_MODULE_47__pages_help_pages_api_help_component__["a" /* ApiHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_48__pages_help_pages_scenario_help_component__["a" /* ScenarioHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_50__pages_help_pages_connections_help_component__["a" /* ConnectionsHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_51__pages_help_pages_queries_help_component__["a" /* QueriesHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_53__pages_help_pages_custom_help_component__["a" /* CustomHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_49__pages_help_pages_documents_help_component__["a" /* DocumentsHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_52__pages_help_pages_previews_help_component__["a" /* PreviewsHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_54__pages_help_pages_slowquery_help_component__["a" /* SlowqueryHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_object_viewer_object_viewer_component__["a" /* ObjectViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_help_browser_help_browser_component__["a" /* HelpBrowserComponent */],
                __WEBPACK_IMPORTED_MODULE_45__pages_slow_query_slow_query_component__["a" /* SlowQueryComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_api_tester_api_tester_component__["a" /* ApiTesterComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_monitor_monitor_component__["a" /* MonitorComponent */],
                __WEBPACK_IMPORTED_MODULE_46__pages_log_log_component__["a" /* LogComponent */],
                __WEBPACK_IMPORTED_MODULE_34__directives_auto_scroll_directive__["a" /* AutoScrollDirective */],
                __WEBPACK_IMPORTED_MODULE_55__components_fields_browser_fields_browser_component__["a" /* FieldsBrowserComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_clipboard__["a" /* ClipboardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_codemirror__["CodemirrorModule"],
                __WEBPACK_IMPORTED_MODULE_9__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__services_utils_service__["a" /* UtilsService */],
                __WEBPACK_IMPORTED_MODULE_17__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_14__services_user_settings_service__["a" /* UserSettingsService */],
                __WEBPACK_IMPORTED_MODULE_11__services_app_pages_service__["a" /* AppPagesService */],
                __WEBPACK_IMPORTED_MODULE_13__services_browser_service__["a" /* BrowserService */],
                __WEBPACK_IMPORTED_MODULE_15__services_schema_cache_service__["a" /* SchemaCacheService */],
                __WEBPACK_IMPORTED_MODULE_12__services_interaction_service__["a" /* InteractionService */],
                __WEBPACK_IMPORTED_MODULE_18__services_dialogs_service__["a" /* DialogsService */],
                __WEBPACK_IMPORTED_MODULE_19__services_log_service__["a" /* LogService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_25__components_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_parameter_editor_parameter_editor_component__["a" /* ParameterEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_value_editor_value_editor_component__["a" /* ValueEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_47__pages_help_pages_api_help_component__["a" /* ApiHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_48__pages_help_pages_scenario_help_component__["a" /* ScenarioHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_50__pages_help_pages_connections_help_component__["a" /* ConnectionsHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_51__pages_help_pages_queries_help_component__["a" /* QueriesHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_53__pages_help_pages_custom_help_component__["a" /* CustomHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_49__pages_help_pages_documents_help_component__["a" /* DocumentsHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_52__pages_help_pages_previews_help_component__["a" /* PreviewsHelpComponent */],
                __WEBPACK_IMPORTED_MODULE_54__pages_help_pages_slowquery_help_component__["a" /* SlowqueryHelpComponent */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/api-tester/api-tester.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"api-tester\" [ngClass]=\"{'active':test.show}\" >\n  <button class=\"close-button\" mat-icon-button (click)=\"close()\">\n    <mat-icon>close</mat-icon>\n  </button>\n  <div layout-row>\n    <div class=\"api-test-editor\" layout-col layout-50>\n      <div class=\"inputs\" layout-row>\n        <mat-form-field class=\"verb\">\n          <input matInput [(ngModel)]=\"test.verb\" placeholder=\"host\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"test.host\" placeholder=\"host\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"test.path\" placeholder=\"path\">\n        </mat-form-field>\n      </div>\n      <textarea class=\"no-resize\" [(ngModel)]=\"test.body\"></textarea>\n      <div class=\"api-test-toolbar\">\n        <button mat-raised-button (click)=\"go()\">GO</button>\n      </div>\n    </div>\n    <div class=\"api-test-response echo-scrollbar\" layout-col layout-50>\n      <pre class=\"debug-pre expanded\" [ngClass]=\"{'error':test.error}\">{{test.error||test.response}}</pre>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/api-tester/api-tester.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiTesterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_settings_service__ = __webpack_require__("../../../../../src/app/services/user-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__ = __webpack_require__("../../../../../src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiTesterComponent = (function () {
    function ApiTesterComponent(user, interaction, u) {
        this.user = user;
        this.interaction = interaction;
        this.u = u;
    }
    ApiTesterComponent.prototype.go = function () {
        var _this = this;
        if (!this.test.running) {
            this.test.running = true;
            this.test.error = null;
            this.interaction.test(this.test, function (err, r) {
                _this.test.error = err ? _this.u.getErrorMessage(err) : null;
                _this.test.response = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.isObject(r) ? JSON.stringify(r, null, 2) : '' + (r || '');
                _this.test.running = false;
            });
        }
    };
    ApiTesterComponent.prototype.close = function () {
        this.test.show = false;
    };
    ApiTesterComponent.prototype.ngOnInit = function () {
        this.test.host = this.test.host || (this.user.settings || {})['host'] || 'http://localhost:9001';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('test'),
        __metadata("design:type", Object)
    ], ApiTesterComponent.prototype, "test", void 0);
    ApiTesterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-api-tester',
            template: __webpack_require__("../../../../../src/app/components/api-tester/api-tester.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_settings_service__["a" /* UserSettingsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__["a" /* InteractionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_utils_service__["a" /* UtilsService */]])
    ], ApiTesterComponent);
    return ApiTesterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/browser/browser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbox float-left page-items-browser\">\n  <div class=\"toolbox-header\">\n    <input placeholder=\"search...\" [(ngModel)]=\"searchTerm\" (change)=\"refresh()\">\n    <button class=\"clear-button\" mat-icon-button (click)=\"clear()\" [disabled]=\"!searchTerm\">\n      <mat-icon aria-label=\"clear button\">close</mat-icon>\n    </button>\n    <div class=\"search-state\">{{searchState}}</div>\n  </div>\n  <div class=\"toolbox-items echo-scrollbar\">\n    <mat-spinner *ngIf=\"browser.idle\"></mat-spinner>\n    <mat-nav-list *ngIf=\"!browser.idle\">\n      <mat-list-item *ngFor=\"let d of documents\" (click)=\"browser.navigate(d)\" [ngClass]=\"{'accent':(browser.current||{})._id === d._id}\">\n        <mat-icon *ngIf=\"browser.options.icon\" [ngClass]=\"{'warn-color':!!d._new}\"\n                  aria-label=\"current scenario\">{{browser.options.icon}}</mat-icon>\n        <span class=\"browser-item-content\">{{d[browser.options.namePrp]||d._id}}<span class=\"new-element\" *ngIf=\"d._new\"> (new)</span></span>\n        <div *ngIf=\"browser.options.description\" class=\"browser-item-description\">{{browser.options.description(d)}}</div>\n      </mat-list-item>\n    </mat-nav-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/browser/browser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CanDeactivateEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_browser_service__ = __webpack_require__("../../../../../src/app/services/browser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrowserComponent = (function () {
    function BrowserComponent(browser) {
        this.browser = browser;
        this.searchState = '';
        this.documents = [];
        var self = this;
        self.browser.onChanged = function () { return self.refresh(); };
    }
    BrowserComponent.prototype.clear = function () {
        this.searchTerm = '';
        this.searchState = '' + (this.documents || []).length;
        this.refresh();
    };
    BrowserComponent.prototype.refresh = function () {
        var _this = this;
        var rgx = this.searchTerm ? new RegExp(this.searchTerm, 'i') : null;
        this.documents = rgx ? __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.filter(this.browser.documents, function (d) { return rgx.test(d[_this.browser.options.namePrp || 'name']); }) : this.browser.documents;
        var n = (this.documents || []).length;
        var N = (this.browser.documents || []).length;
        this.searchState = (N !== n) ? n + '/' + N : '' + n;
    };
    BrowserComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BrowserComponent.prototype, "searchTerm", void 0);
    BrowserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-browser',
            template: __webpack_require__("../../../../../src/app/components/browser/browser.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_browser_service__["a" /* BrowserService */]])
    ], BrowserComponent);
    return BrowserComponent;
}());


var CanDeactivateEditor = (function () {
    function CanDeactivateEditor(browser, u) {
        this.browser = browser;
        this.u = u;
    }
    CanDeactivateEditor.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        var self = this;
        var source = self.u.parseUrlId(currentState.url);
        var target = self.u.parseUrlId(nextState.url);
        if (source === target) {
            return true;
        }
        if (!__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.find(self.browser.documents, function (d) { return d._new; })) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            self.u.confirm({
                message: 'Some documents have been created.\nDo you want to save them?',
                ok: 'Yes',
                no: 'No',
                cancel: 'Cancel'
            }, function (data) {
                switch (data.resp) {
                    case 'ok':
                        self.browser.saveAll().then(function () { return resolve(true); });
                        break;
                    case 'no':
                        resolve(true);
                        break;
                    case 'cancel':
                    default:
                        resolve(false);
                }
            });
        });
    };
    CanDeactivateEditor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_browser_service__["a" /* BrowserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_utils_service__["a" /* UtilsService */]])
    ], CanDeactivateEditor);
    return CanDeactivateEditor;
}());



/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div layout-right>\n  <button mat-icon-button (click)=\"cartS.toggleSelection()\" matTooltip=\"toggle selection\" [disabled]=\"!cartS.items.length\">\n    <mat-icon aria-label=\"cart button\">done_all</mat-icon>\n  </button>\n  <button mat-icon-button (click)=\"cartS.removeSelection()\" matTooltip=\"remove selected\" [disabled]=\"!cartS.selection().length\">\n    <mat-icon aria-label=\"cart button\">delete_forever</mat-icon>\n  </button>\n  <button mat-icon-button (click)=\"cartS.clear()\" matTooltip=\"clear cart\" [disabled]=\"!cartS.items.length\">\n    <mat-icon aria-label=\"cart button\">delete_sweep</mat-icon>\n  </button>\n</div>\n<div class=\"cart-items-container echo-scrollbar\">\n  <div class=\"cart-type\" *ngFor=\"let i of cartS.items\">\n    <div class=\"cart-header\">{{i.type}}</div>\n    <mat-nav-list>\n      <mat-list-item *ngFor=\"let o of i.items\" (click)=\"toggleCartElement(o)\" [ngClass]=\"{'accent':o.selected}\">\n        <mat-icon aria-label=\"type icon\">{{i.icon}}</mat-icon>\n        {{o.name || o.title || o._id}}\n      </mat-list-item>\n    </mat-nav-list>\n  </div>\n</div>\n<button *ngIf=\"canPush && cartS.selection().length\" class=\"push-button\" mat-fab (click)=\"cartS.push()\"\n        matTooltip=\"Add selected alements\">\n  <mat-icon aria-label=\"cart button\">forward</mat-icon>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = (function () {
    function CartComponent(cartS, u, router) {
        this.cartS = cartS;
        this.u = u;
        this.router = router;
        this.canPush = false;
        var self = this;
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* NavigationEnd */]) {
                self.canPush = (self.u.parseUrlId(event.url) === '/scenario');
            }
        });
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.toggleCartElement = function (o) {
        o.selected = !o.selected;
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/components/cart/cart.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_3__services_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/confirm-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"!!data.title\">{{data.title}}</h1>\n<div mat-dialog-content>\n  <div class=\"confirm-message\">{{data.message}}</div>\n  <input matInput *ngIf=\"data.withValue\" class=\"confirm-value\" placeholder=\"{{data.placeholder||'value...'}}\" [(ngModel)]=\"data.value\">\n</div>\n<div mat-dialog-actions>\n  <button *ngIf=\"data['ok']\" color=\"accent\" mat-button cdkFocusInitial (click)=\"onClick('ok')\">{{data['ok'] || 'Ok'}}</button>\n  <button *ngIf=\"data['no']\" mat-button (click)=\"onClick('no')\">{{data['no'] || 'No'}}</button>\n  <button *ngIf=\"data['cancel']\" mat-button (click)=\"onClick('cancel')\">{{data['cancel'] || 'Cancel'}}</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/confirm-dialog/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmDialogComponent = (function () {
    function ConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmDialogComponent.prototype.onClick = function (resp) {
        this.data.resp = resp;
        this.dialogRef.close(this.data);
    };
    ConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__("../../../../../src/app/components/confirm-dialog/confirm-dialog.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/debug-pre/debug-pre.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user.settings.debug && (browser||{}).current_str\" class=\"app-debug-pre\">\n  <pre class=\"debug-pre\" [ngClass]=\"{'expanded':expanded}\">{{(browser||{}).current_str||''}}</pre>\n  <button class=\"debug-pre-toggler\" mat-icon-button (click)=\"toggle()\">\n    <mat-icon aria-label=\"toggler\">{{expanded?'expand_less':'expand_more'}}</mat-icon>\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/debug-pre/debug-pre.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebugPreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_browser_service__ = __webpack_require__("../../../../../src/app/services/browser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_settings_service__ = __webpack_require__("../../../../../src/app/services/user-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DebugPreComponent = (function () {
    function DebugPreComponent(browser, user) {
        this.browser = browser;
        this.user = user;
        this.expanded = false;
    }
    DebugPreComponent.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    DebugPreComponent.prototype.ngOnInit = function () {
    };
    DebugPreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-debug-pre',
            template: __webpack_require__("../../../../../src/app/components/debug-pre/debug-pre.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_browser_service__["a" /* BrowserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_settings_service__["a" /* UserSettingsService */]])
    ], DebugPreComponent);
    return DebugPreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/fields-browser/fields-browser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"schema-browser\">\n  <div class=\"header\">\n    <div class=\"title\">Fields</div>\n  </div>\n  <div #eschema class=\"schema-container echo-scrollbar\" lock-scroll>\n    <div class=\"schema-page-list\">\n      <div class=\"schema-page\" *ngFor=\"let f of ((browser.current||{}).columns||[])\" layout-row>\n        <mat-icon class=\"as-button\" aria-label=\"add button\" (click)=\"notifyAdd(f)\">add_circle_outline</mat-icon>\n        <span class=\"title\">{{f.name}}</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/fields-browser/fields-browser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldsBrowserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_browser_service__ = __webpack_require__("../../../../../src/app/services/browser.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FieldsBrowserComponent = (function () {
    function FieldsBrowserComponent(browser) {
        this.browser = browser;
        this.insert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FieldsBrowserComponent.prototype.ngOnInit = function () {
    };
    FieldsBrowserComponent.prototype.notifyAdd = function (field) {
        this.insert.emit(field.name);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FieldsBrowserComponent.prototype, "insert", void 0);
    FieldsBrowserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fields-browser',
            template: __webpack_require__("../../../../../src/app/components/fields-browser/fields-browser.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_browser_service__["a" /* BrowserService */]])
    ], FieldsBrowserComponent);
    return FieldsBrowserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/help-browser/help-browser.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"map\" class=\"help-browser\" layout-col>\n  <div class=\"vertical-line\"></div>\n  <ng-container *ngFor=\"let mi of map\">\n    <div *ngIf=\"mi.divider\" class=\"help-browser-divider\"></div>\n    <div *ngIf=\"mi.title\" class=\"help-browser-title\">{{mi.title}}</div>\n    <div class=\"help-browser-item\" *ngIf=\"!mi.divider && !mi.title\"\n         [ngClass]=\"'indent-' + mi.level\" (click)=\"goto(mi.id)\">{{mi.desc}}</div>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/help-browser/help-browser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpBrowserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpBrowserComponent = (function () {
    function HelpBrowserComponent() {
        this.goTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HelpBrowserComponent.prototype.goto = function (target) {
        this.goTo.emit(target);
    };
    HelpBrowserComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('map'),
        __metadata("design:type", Object)
    ], HelpBrowserComponent.prototype, "map", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HelpBrowserComponent.prototype, "goTo", void 0);
    HelpBrowserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help-browser',
            template: __webpack_require__("../../../../../src/app/components/help-browser/help-browser.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HelpBrowserComponent);
    return HelpBrowserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/monitor/monitor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"log-monitor echo-scrollbar\" auto-scroll layout-col>\n  <ng-container *ngFor=\"let i of log.items\">\n    <div class=\"log-item has-details\" *ngIf=\"!!i.time_str\" [ngClass]=\"'log-item-'+i.type\"\n      (click)=\"details(i)\" tabindex=\"-1\">[{{i.time_str}} {{(i.type||'').toUpperCase()}}] {{i.message}}</div>\n    <div class=\"log-item log-item-string\" *ngIf=\"!i.time_str\">{{i}}</div>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/monitor/monitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_log_service__ = __webpack_require__("../../../../../src/app/services/log.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonitorComponent = (function () {
    function MonitorComponent(log) {
        this.log = log;
    }
    MonitorComponent.prototype.details = function (item) {
        // TODO: show details...
        console.log('DETAILS: ', item);
    };
    MonitorComponent.prototype.ngOnInit = function () {
    };
    MonitorComponent.prototype.ngOnDestroy = function () { };
    MonitorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-monitor',
            template: __webpack_require__("../../../../../src/app/components/monitor/monitor.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_log_service__["a" /* LogService */]])
    ], MonitorComponent);
    return MonitorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/new-element/new-element.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"new-element\" *ngIf=\"!browser.current\">\n  <div class=\"label\">select an element</div>\n  <div *ngIf=\"browser.options.template\" class=\"link accent-color\" (click)=\"browser.newElement()\">or create new one</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/new-element/new-element.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewElementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_browser_service__ = __webpack_require__("../../../../../src/app/services/browser.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewElementComponent = (function () {
    function NewElementComponent(browser) {
        this.browser = browser;
    }
    NewElementComponent.prototype.ngOnInit = function () { };
    NewElementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-element',
            template: __webpack_require__("../../../../../src/app/components/new-element/new-element.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_browser_service__["a" /* BrowserService */]])
    ], NewElementComponent);
    return NewElementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/object-viewer/object-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"object-viewer-content\" layout-col>\n  <mat-icon class=\"object-icon\" *ngIf=\"icon\">{{icon}}</mat-icon>\n  <div>&#123;</div>\n  <div class=\"object-property\" *ngFor=\"let prp of element\">\n    <span class=\"name\">{{prp.name}}</span>\n    <span class=\"type\">({{prp.type}})</span>\n    <span class=\"desc\">{{prp.description}}</span>\n  </div>\n  <div>&#125;</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/object-viewer/object-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ObjectViewerComponent = (function () {
    function ObjectViewerComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('element'),
        __metadata("design:type", Object)
    ], ObjectViewerComponent.prototype, "element", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('icon'),
        __metadata("design:type", String)
    ], ObjectViewerComponent.prototype, "icon", void 0);
    ObjectViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-object-viewer',
            template: __webpack_require__("../../../../../src/app/components/object-viewer/object-viewer.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ObjectViewerComponent);
    return ObjectViewerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page-header/page-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-editor-toolbar\">\n  <div class=\"header-background\">\n    <mat-progress-bar *ngIf=\"u.idle\" mode=\"indeterminate\"></mat-progress-bar>\n  </div>\n  <mat-icon *ngIf=\"options.isNew && options.isNew()\" matTooltip=\"new element!\" class=\"new-icon warn-color\">new_releases</mat-icon>\n  <h1 class=\"title\">{{title()}}</h1>\n  <ng-container *ngFor=\"let b of options.buttons||[]\">\n    <button *ngIf=\"!b.divider && (!b.visible || b.visible())\" mat-icon-button color=\"{{b.color}}\"\n            [ngClass]=\"{'mat-mini-fab':b.selected && b.selected()}\" (click)=\"b.action($event)\"\n            matTooltip=\"{{b.tooltip}}\" [disabled]=\"b.disabled && b.disabled()\">\n      <mat-icon aria-label=\"toolbar button\">{{b.icon}}</mat-icon>\n    </button>\n    <div *ngIf=\"!!b.divider\" class=\"divider\"></div>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page-header/page-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageHeaderComponent = (function () {
    function PageHeaderComponent(u) {
        this.u = u;
    }
    PageHeaderComponent.prototype.title = function () {
        return (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isFunction((this.options || {})['title'])) ? this.options['title']() : '';
    };
    PageHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PageHeaderComponent.prototype, "options", void 0);
    PageHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-header',
            template: __webpack_require__("../../../../../src/app/components/page-header/page-header.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_utils_service__["a" /* UtilsService */]])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/parameter-editor/parameter-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parameter-editor\" mat-dialog-content>\n  <div layout-row>\n    <mat-form-field layout-50>\n      <input matInput [(ngModel)]=\"data.parameter.name\" placeholder=\"Name\">\n    </mat-form-field>\n    <mat-form-field layout-25>\n      <mat-select placeholder=\"Type\" [(ngModel)]=\"data.parameter.type\" (change)=\"checkType()\">\n        <mat-option *ngFor=\"let t of pTypes\" [value]=\"t.value\">{{ t.name }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field *ngIf=\"data.parameter.type!=='system'\" layout-25>\n      <mat-select placeholder=\"Data Type\" [(ngModel)]=\"data.parameter.dataType\">\n        <mat-option *ngFor=\"let t of dTypes\" [value]=\"t.value\">{{ t.name }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field *ngIf=\"data.parameter.type==='system'\" layout-25>\n      <mat-select placeholder=\"System Type\" [(ngModel)]=\"data.parameter.systemType\" (change)=\"checkSystemType()\">\n        <mat-option *ngFor=\"let t of sTypes\" [value]=\"t.name\">{{ t.name }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <!-- LOOKUP -->\n  <div *ngIf=\"isLookup()\" class=\"lookup-editor layout-band-color\" layout-col>\n    <mat-form-field>\n      <mat-select placeholder=\"Data Source\" [(ngModel)]=\"data.parameter.lookup.id\" (change)=\"checkLookup()\">\n        <mat-option *ngFor=\"let ds of dataSources\" [value]=\"ds._id\">{{ ds.name }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div layout-row>\n      <mat-form-field layout-50>\n        <mat-select [(ngModel)]=\"data.parameter.lookup.fieldKey\" placeholder=\"Key Field\">\n          <mat-option *ngFor=\"let f of (currentDataSource||{}).columns\" [value]=\"f.name\">{{ f.name }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field layout-50>\n        <mat-select [(ngModel)]=\"data.parameter.lookup.fieldValue\" placeholder=\"Display Field\">\n          <mat-option *ngFor=\"let f of (currentDataSource||{}).columns\" [value]=\"f.name\">{{ f.name }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <!-- LIST -->\n  <div *ngIf=\"isList()\" class=\"list-editor\" layout-col>\n    <div class=\"layout-band\" layout-row>\n      <span>Elements: {{(data.parameter.lookupItems||[]).length}}</span>\n      <button mat-icon-button class=\"on-right\" style=\"top: 15%\" (click)=\"addLookupItem()\">\n        <mat-icon>add_circle_outline</mat-icon>\n      </button>\n    </div>\n    <mat-list class=\"lookup-items layout-band-color echo-scrollbar\">\n      <mat-list-item *ngFor=\"let li of data.parameter.lookupItems; let idx = index\">\n        <span class=\"lookup-item-num\">{{(idx+1)}}</span>\n        <mat-form-field layout-50>\n          <input matInput [(ngModel)]=\"li.key\" placeholder=\"Value\">\n        </mat-form-field>\n        <mat-form-field layout-50>\n          <input matInput [(ngModel)]=\"li.value\" placeholder=\"Description\">\n        </mat-form-field>\n        <button mat-icon-button (click)=\"removeLookupItem(li)\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </mat-list-item>\n    </mat-list>\n  </div>\n\n\n  <!-- VALUES -->\n  <div layout-row>\n    <mat-form-field layout-50>\n      <input matInput [(ngModel)]=\"data.parameter.defaultValue\" placeholder=\"Default Value\" [disabled]=\"isSystem()\">\n    </mat-form-field>\n    <mat-form-field layout-50>\n      <input matInput [(ngModel)]=\"data.parameter.value\" placeholder=\"Current Value\" [disabled]=\"isSystem()\">\n    </mat-form-field>\n  </div>\n\n  <!-- OPTIONS -->\n  <span *ngIf=\"!isSystem()\" class=\"layout-band-title\">Options:</span>\n  <div *ngIf=\"!isSystem()\" class=\"layout-band\" layout-row>\n    <mat-slide-toggle [(ngModel)]=\"data.parameter.isOptional\">Optional</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"data.parameter.isReadOnly\">Read Only</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"data.parameter.isMultiSelect\" *ngIf=\"isLookupOrList()\">Multi Select</mat-slide-toggle>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"close()\">cancel</button>\n  <button mat-button cdkFocusInitial (click)=\"close(data.parameter)\">apply</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/parameter-editor/parameter-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__ = __webpack_require__("../../../../../src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SYS_PARAM_KEY = '5933a09f-d99d-4107-a11b-b0e85e1b8b78';
var ParameterEditorComponent = (function () {
    function ParameterEditorComponent(dialogRef, data, interaction, u) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.interaction = interaction;
        this.u = u;
        this.pTypes = [
            { name: 'Normal', value: 'normal' },
            { name: 'List', value: 'list' },
            { name: 'Lookup', value: 'lookup' }
        ];
        this.dTypes = [
            { name: 'String', value: 'string' },
            { name: 'Number', value: 'number' },
            { name: 'Date', value: 'date' },
            { name: 'Boolean', value: 'bool' },
        ];
        this.sTypes = [];
        this.dataSources = [];
        this.currentDataSource = null;
    }
    ParameterEditorComponent.prototype.checkType = function () {
        this.data.parameter.value = '';
        this.data.parameter.defaultValue = '';
        this.data.parameter.lookup = { id: '', fieldValue: '', fieldKey: '' };
        this.data.parameter.lookupItems = [];
        if (this.isSystem()) {
            this.data.parameter.isOptional = false;
            this.data.parameter.isReadOnly = true;
            this.data.parameter.isMultiSelect = false;
            this.data.parameter.isHidden = false;
        }
    };
    ParameterEditorComponent.prototype.checkSystemType = function () {
        var _this = this;
        this.data.parameter.lookup = {
            id: SYS_PARAM_KEY,
            fieldKey: this.data.parameter.systemType,
            fieldValue: this.data.parameter.systemType
        };
        var lkt = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.find(this.sTypes, function (t) { return t.name === _this.data.parameter.systemType; });
        this.data.parameter.value = lkt ? lkt.value : '';
        this.data.parameter.defaultValue = this.data.parameter.value;
        this.data.parameter.dataType = lkt ? lkt.dataType : 'string';
    };
    ParameterEditorComponent.prototype.checkLookup = function () {
        var self = this;
        if ((self.data.parameter.lookup || {}).id && !self.isSystem()) {
            self.interaction.getDocument(self.data.parameter.lookup.id).subscribe(function (ds) {
                self.currentDataSource = ds;
            }, function (err) {
                self.u.error(err);
            });
        }
        else {
            self.currentDataSource = null;
        }
    };
    ParameterEditorComponent.prototype.checkSystem = function () {
        var self = this;
        var st = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.find(self.pTypes, function (t) { return t.value === 'system'; });
        if (self.sTypes.length && !st) {
            self.pTypes.push({ name: 'System', value: 'system' });
        }
        else if (!self.sTypes.length && st) {
            __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.pull(self.pTypes, st);
        }
    };
    ParameterEditorComponent.prototype.isSystem = function () {
        return this.data.parameter.type === 'system';
    };
    ParameterEditorComponent.prototype.isLookupOrList = function () {
        return ['lookup', 'list'].indexOf(this.data.parameter.type) >= 0;
    };
    ParameterEditorComponent.prototype.isLookup = function () {
        return this.data.parameter.type === 'lookup';
    };
    ParameterEditorComponent.prototype.isList = function () {
        return this.data.parameter.type === 'list';
    };
    ParameterEditorComponent.prototype.ngOnInit = function () {
        var self = this;
        self.data.parameter = self.data.parameter || {};
        self.data.parameter.lookup = self.data.parameter.lookup || {};
        // DATASOURCES
        self.dataSources = [];
        self.interaction.getDocuments().subscribe(function (sources) {
            var dss = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.filter(sources, function (d) { return d._type === 'queries'; });
            self.dataSources = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.sortBy(dss, ['name']);
            self.checkLookup();
        }, function (err) {
            self.u.error(err);
        });
        // SYSTEM PARAMETERS
        self.interaction.getSystemParameters().subscribe(function (params) {
            self.sTypes = params || [];
            self.checkSystem();
        }, function (err) {
            self.u.error(err);
            self.checkSystem();
        });
    };
    ParameterEditorComponent.prototype.close = function (p) {
        this.dialogRef.close(p);
    };
    ParameterEditorComponent.prototype.addLookupItem = function () {
        this.data.parameter.lookupItems = this.data.parameter.lookupItems || [];
        this.data.parameter.lookupItems.push({ key: '', value: '' });
    };
    ParameterEditorComponent.prototype.removeLookupItem = function (li) {
        __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.pull(this.data.parameter.lookupItems, li);
    };
    ParameterEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parameter-editor',
            template: __webpack_require__("../../../../../src/app/components/parameter-editor/parameter-editor.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__["a" /* InteractionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_utils_service__["a" /* UtilsService */]])
    ], ParameterEditorComponent);
    return ParameterEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/schema-browser/schema-browser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"schema-browser\">\n  <div class=\"header\">\n    <button *ngIf=\"(current||{}).prev\" mat-icon-button (click)=\"back()\">\n      <mat-icon aria-label=\"back button\">navigate_before</mat-icon>\n    </button>\n    <div class=\"title\">{{(current||{}).title}}</div>\n  </div>\n  <div #eschema class=\"schema-container echo-scrollbar\" lock-scroll>\n    <mat-spinner *ngIf=\"cache.idle\" diameter=\"60\"></mat-spinner>\n    <div class=\"error\" *ngIf=\"cache.error\">{{cache.error}}</div>\n    <div class=\"schema-page-list\" *ngIf=\"current\">\n      <div class=\"schema-page\" *ngFor=\"let p of current.pages\" layout-row>\n        <mat-icon *ngIf=\"p.value\" class=\"as-button\" aria-label=\"add button\" (click)=\"notifyAdd(p)\">add_circle_outline</mat-icon>\n        <mat-icon *ngIf=\"p.icon && !p.value\" aria-label=\"page icon\">{{p.icon}}</mat-icon>\n        <span class=\"title\">{{p.title}}</span>\n        <span>{{p.pages.length ? ' (' + p.pages.length + ')' : ''}}</span>\n        <div class=\"right-buttons\" layout-row layout-right>\n          <mat-icon *ngIf=\"p.original\" class=\"as-button\" aria-label=\"info button\" (click)=\"showInfo(p)\">info</mat-icon>\n          <mat-icon *ngIf=\"p.pages.length\" class=\"as-button\" aria-label=\"open button\" (click)=\"open(p)\">keyboard_arrow_right</mat-icon>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/schema-browser/schema-browser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaBrowserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_schema_cache_service__ = __webpack_require__("../../../../../src/app/services/schema-cache.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchemaBrowserComponent = (function () {
    function SchemaBrowserComponent(cache) {
        this.cache = cache;
        this.insert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.title = 'Schema';
        this.schema = null;
        this.schema_str = '';
        this.current = null;
        var self = this;
        cache.events.subscribe(function () { return self.checkSchema(cache.schema); });
    }
    SchemaBrowserComponent.prototype.checkSchema = function (schema) {
        this.schema_str = '';
        if (schema) {
            this.schema = schema;
            this.current = schema.model;
        }
        else {
            this.schema = null;
            this.current = null;
        }
    };
    SchemaBrowserComponent.prototype.ngOnInit = function () {
        this.checkSchema(this.cache.schema);
    };
    SchemaBrowserComponent.prototype.ngOnDestroy = function () {
        // this.cache.events.unsubscribe();
    };
    SchemaBrowserComponent.prototype.open = function (page) {
        this.current = page;
    };
    SchemaBrowserComponent.prototype.notifyAdd = function (page) {
        this.insert.emit(page);
    };
    SchemaBrowserComponent.prototype.showInfo = function (page) {
        this.current = this.cache.getInfoPage(page);
    };
    SchemaBrowserComponent.prototype.back = function () {
        if ((this.current || {}).prev) {
            this.current = this.current.prev;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SchemaBrowserComponent.prototype, "insert", void 0);
    SchemaBrowserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schema-browser',
            template: __webpack_require__("../../../../../src/app/components/schema-browser/schema-browser.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_schema_cache_service__["a" /* SchemaCacheService */]])
    ], SchemaBrowserComponent);
    return SchemaBrowserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/value-editor/value-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"value-editor\" mat-dialog-content>\n  <div layout-row>\n    <mat-form-field layout-70>\n      <input matInput [(ngModel)]=\"data.value.name\" placeholder=\"Name\">\n    </mat-form-field>\n    <mat-form-field layout-30>\n      <mat-select placeholder=\"Type\" [(ngModel)]=\"data.value.type\" (change)=\"checkType()\">\n        <mat-option *ngFor=\"let t of vTypes\" [value]=\"t.value\">{{ t.name }}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <!-- MANUAL -->\n  <div *ngIf=\"isManual()\" layout-col>\n    <mat-form-field>\n      <input matInput class=\"code code-color\" [(ngModel)]=\"data.value.settings.value\" placeholder=\"value / expression\">\n    </mat-form-field>\n  </div>\n\n  <!-- DATA -->\n  <div *ngIf=\"isData()\" layout-col>\n    <mat-slide-toggle [(ngModel)]=\"data.value.settings.autoCol\">Auto column generation</mat-slide-toggle>\n    <div *ngIf=\"data.value.settings.autoCol\" layout-row>\n      <mat-form-field layout-50>\n        <input matInput [(ngModel)]=\"data.value.settings.colCount\" placeholder=\"Columns Count\">\n      </mat-form-field>\n      <mat-form-field layout-50>\n        <input matInput [(ngModel)]=\"data.value.settings.rowCount\" placeholder=\"Records Count\">\n      </mat-form-field>\n    </div>\n    <div *ngIf=\"!data.value.settings.autoCol\" layout-col>\n      <div class=\"layout-band\" layout-row>\n        <span>Columns: {{data.value.settings.columns.length}}</span>\n        <button mat-button class=\"on-right\" style=\"top: 20%\" color=\"accent\" (click)=\"addColumn()\">NEW COLUMN</button>\n      </div>\n      <mat-list class=\"columns-list echo-scrollbar\">\n        <mat-list-item *ngFor=\"let col of data.value.settings.columns\">\n          <div layout-row>\n            <mat-form-field layout-60>\n              <input matInput [(ngModel)]=\"col.name\" placeholder=\"Column Name\">\n            </mat-form-field>\n            <mat-form-field layout-40>\n              <mat-select placeholder=\"Data Type\" [(ngModel)]=\"col.type\">\n                <mat-option *ngFor=\"let t of cDataTypes\" [value]=\"t.value\">{{ t.name }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <button mat-icon-button (click)=\"removeColumn(col)\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </div>\n        </mat-list-item>\n      </mat-list>\n      <mat-form-field layout-50>\n        <input matInput [(ngModel)]=\"data.value.settings.rowCount\" placeholder=\"Records Count\">\n      </mat-form-field>\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"close()\">cancel</button>\n  <button mat-button cdkFocusInitial (click)=\"close(data.value)\">apply</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/value-editor/value-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValueEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ValueEditorComponent = (function () {
    function ValueEditorComponent(dialogRef, data, u) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.u = u;
        this.vTypes = [
            { name: 'Manual', value: 'manual' },
            { name: 'Data', value: 'data' }
        ];
        this.cDataTypes = [
            { name: 'Text', value: 'string' },
            { name: 'Numeric', value: 'number' },
            { name: 'Integer', value: 'integer' },
            { name: 'Date', value: 'date' },
            { name: 'Boolean', value: 'bool' }
        ];
    }
    ValueEditorComponent.prototype.checkType = function () {
        var self = this;
        switch (self.data.value.type) {
            case 'data':
                self.data.value.settings = self.data.value.settings || {};
                __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.defaults(self.data.value.settings, {
                    autoCol: true,
                    columns: [],
                    colCount: 8,
                    rowCount: 20
                });
                break;
            case 'manual':
                self.data.value.settings = self.data.value.settings || {};
                __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.defaults(self.data.value.settings, {
                    value: ''
                });
                break;
        }
    };
    ValueEditorComponent.prototype.addColumn = function () {
        var name = this.u.getNewName(this.data.value.settings.columns, 'New Column');
        this.data.value.settings.columns.push({
            name: name,
            type: 'string'
        });
    };
    ValueEditorComponent.prototype.removeColumn = function (col) {
        __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.pull(this.data.value.settings.columns, col);
    };
    ValueEditorComponent.prototype.isManual = function () {
        return this.data.value.type === 'manual';
    };
    ValueEditorComponent.prototype.isData = function () {
        return this.data.value.type === 'data';
    };
    ValueEditorComponent.prototype.ngOnInit = function () {
        var self = this;
        self.data.value = self.data.value || {};
        self.data.value.type = self.data.value.type || 'manual';
        self.data.value.settings = self.data.value.settings || {};
        self.checkType();
    };
    ValueEditorComponent.prototype.close = function (v) {
        this.dialogRef.close(v);
    };
    ValueEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-value-editor',
            template: __webpack_require__("../../../../../src/app/components/value-editor/value-editor.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__services_utils_service__["a" /* UtilsService */]])
    ], ValueEditorComponent);
    return ValueEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/auto-scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoScrollDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutoScrollDirective = (function () {
    function AutoScrollDirective(ele) {
        this.ele = ele;
        this.observer = null;
    }
    AutoScrollDirective.prototype._scroll = function () {
        this.ele.nativeElement.scrollTop = (this.ele.nativeElement.scrollHeight - this.ele.nativeElement.clientHeight) + 24;
    };
    AutoScrollDirective.prototype.ngOnInit = function () {
        var self = this;
        self.observer = new MutationObserver(function () { return self._scroll(); });
        self.observer.observe(self.ele.nativeElement, { childList: true });
        self._scroll();
    };
    AutoScrollDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[auto-scroll]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], AutoScrollDirective);
    return AutoScrollDirective;
}());



/***/ }),

/***/ "../../../../../src/app/directives/lock-scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockScrollDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Questa direttiva evita che venga scrollato il parent una volta che sull'elemento
 * viene raggiunta la fine dello scroll.
 */
var LockScrollDirective = (function () {
    function LockScrollDirective(ele) {
        this.ele = ele;
        ele.nativeElement.onwheel = this.handleWheel;
    }
    LockScrollDirective.prototype.handleWheel = function (e) {
        var area = this;
        if ((area.scrollTop === (area.scrollHeight - area.clientHeight) && e.wheelDeltaY < 0) ||
            (area.scrollTop === 0 && e.wheelDeltaY > 0)) {
            e.preventDefault();
        }
    };
    LockScrollDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[lock-scroll]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], LockScrollDirective);
    return LockScrollDirective;
}());



/***/ }),

/***/ "../../../../../src/app/pages/connections/connections.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/connections/connections.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container layout-fill\">\n  <app-browser></app-browser>\n  <div class=\"page-editor echo-scrollbar\" flex>\n    <app-page-header [options]=\"header\"></app-page-header>\n    <app-new-element></app-new-element>\n    <div class=\"page-cards\" *ngIf=\"browser.current\">\n      <mat-card>\n        <mat-card-content>\n          <div layout-col>\n            <div layout-row>\n              <mat-form-field layout-70>\n                <input matInput [(ngModel)]=\"browser.current.name\" placeholder=\"Name\">\n              </mat-form-field>\n              <mat-form-field layout-30>\n                <mat-select placeholder=\"server type\" [(ngModel)]=\"browser.current.provider\" (change)=\"checkType()\">\n                  <mat-option *ngFor=\"let p of providers\" [value]=\"p.code\">\n                    {{ p.name }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div layout-row>\n              <mat-form-field layout-70>\n                <textarea rows=\"1\" matInput [(ngModel)]=\"browser.current.info\" placeholder=\"Info\"></textarea>\n              </mat-form-field>\n              <mat-slide-toggle layout-30 [(ngModel)]=\"browser.current.active\">Active</mat-slide-toggle>\n            </div>\n          </div>\n\n        </mat-card-content>\n      </mat-card>\n      <!-- CREDENTIALS -->\n      <span>Connection Data</span>\n      <mat-card>\n        <mat-card-content>\n          <div layout-row>\n            <mat-form-field layout-25>\n              <input matInput [(ngModel)]=\"browser.current.server\" placeholder=\"server\">\n            </mat-form-field>\n            <mat-form-field layout-25>\n              <input matInput [(ngModel)]=\"browser.current.port\" placeholder=\"port\">\n            </mat-form-field>\n            <mat-form-field layout-25>\n              <input matInput [(ngModel)]=\"browser.current.user\" placeholder=\"user\">\n            </mat-form-field>\n            <mat-form-field layout-25>\n              <input matInput type=\"password\" [(ngModel)]=\"browser.current.password\" placeholder=\"password\">\n            </mat-form-field>\n          </div>\n          <div layout-col>\n            <mat-form-field>\n              <textarea matInput [(ngModel)]=\"browser.current.database\" rows=\"1\" placeholder=\"database / connection string\"></textarea>\n            </mat-form-field>\n          </div>\n        </mat-card-content>\n        <mat-card-actions layout-right>\n          <button mat-raised-button color=\"warn\" (click)=\"test()\">TEST</button>\n        </mat-card-actions>\n      </mat-card>\n      <!-- ERROR -->\n      <pre *ngIf=\"error\" class=\"page-editor-error code error\">{{error}}</pre>\n    </div>\n    <app-debug-pre></app-debug-pre>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/connections/connections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_browser_service__ = __webpack_require__("../../../../../src/app/services/browser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__ = __webpack_require__("../../../../../src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConnectionsComponent = (function () {
    function ConnectionsComponent(browser, interaction, u, cart) {
        this.browser = browser;
        this.interaction = interaction;
        this.u = u;
        this.cart = cart;
        this.header = {};
        this.providers = [
            { name: 'SQL Server', code: 'sqlserver', defaultPort: 1433 }
        ];
        this.error = null;
        var self = this;
        self.browser.register({
            type: self.interaction.types.connections,
            onSelect: function () { return self.error = null; },
            template: {
                name: 'New Connection',
                info: '',
                user: '',
                password: '',
                server: '',
                database: '',
                port: 1433,
                provider: 'sqlserver',
                active: true
            }
        });
        self.header = {
            title: function () { return (self.browser.currentInfo || {}).name; },
            isNew: function () { return (self.browser.current || {})._new; },
            buttons: [{
                    icon: 'add_circle_outline',
                    tooltip: 'Add a new db connection',
                    visible: function () { return !!self.browser.current; },
                    action: function (e) { return self.browser.newElement(); }
                }, {
                    icon: 'save',
                    tooltip: 'Save modifies',
                    visible: function () { return !!self.browser.current; },
                    action: function () { return self.browser.save('Connection successfully updated!'); }
                }, {
                    icon: 'add_shopping_cart',
                    tooltip: 'Add to cart',
                    visible: function () { return !!self.browser.current; },
                    disabled: function () { return cart.contains(self.browser.current); },
                    action: function () { return cart.add(self.browser.current); }
                }, {
                    icon: 'delete',
                    tooltip: 'Remove connection',
                    color: 'warn',
                    visible: function () { return !!self.browser.current; },
                    action: function (e) { return self.browser.delete('Delete current connection?'); }
                }]
        };
        self.interaction.getProviders().subscribe(function (providers) {
            if (__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.keys(providers || {}).length) {
                self.providers = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.filter(__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.map(__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.keys(providers), function (k) { return providers[k]; }), function (p) { return p.active; });
            }
        });
    }
    ConnectionsComponent.prototype.test = function () {
        var self = this;
        self.interaction.testConnection(self.browser.current, function (err) {
            self.error = err ? self.u.getErrorMessage(err) : null;
            self.u.snack(self.error || 'Connection successfully tested!');
        });
    };
    ConnectionsComponent.prototype.checkType = function () {
        var _this = this;
        this.browser.current.server = '';
        this.browser.current.user = '';
        this.browser.current.password = '';
        this.browser.current.database = '';
        var choice = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.find(this.providers, function (p) { return p.code === _this.browser.current.provider; });
        if (choice) {
            this.browser.current.port = choice.defaultPort;
        }
    };
    ConnectionsComponent.prototype.ngOnInit = function () {
    };
    ConnectionsComponent.prototype.ngOnDestroy = function () {
        this.browser.deregister();
    };
    ConnectionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-connections',
            template: __webpack_require__("../../../../../src/app/pages/connections/connections.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/connections/connections.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_browser_service__["a" /* BrowserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__["a" /* InteractionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_cart_service__["a" /* CartService */]])
    ], ConnectionsComponent);
    return ConnectionsComponent;
}());

/**
 {
  "_id": "564dd89be878c0600640aeb6",
  "name": "AvventureWok",
  "info": "Connessione locale di test su localhost",
  "user": "siduser",
  "password": "siduser",
  "server": "127.0.0.1",
  "database": "AdventureWorks2012",
  "active": true,
  "port": 1433,
  "provider": "sqlserver",
  "_type": "connections",
  "_tid": "connections@564dd89be878c0600640aeb6"
}
 */


/***/ }),

/***/ "../../../../../src/app/pages/cover/cover.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"echo-jumbo echo-background echo-jumbo-cover mat-elevation-z6\">\n  <h1>{{ title }}</h1>\n  <button *ngIf=\"!app.loading\" class=\"flat\" mat-fab color=\"primary\" (click)=\"go()\">\n    <mat-icon aria-label=\"go button\">build</mat-icon>\n  </button>\n  <mat-spinner class=\"central\" *ngIf=\"app.loading&&!app.error\" diameter=\"50\"></mat-spinner>\n  <p>{{ message() }}</p>\n</div>\n<p class=\"error cover-error\" *ngIf=\"app.error\">{{app.error}}</p>\n<app-monitor class=\"cover-monitor\" *ngIf=\"!app.error\"></app-monitor>\n<div class=\"echo-footer\">\n  {{ footer }}\n  <a href=\"{{github}}\" target=\"_blank\">\n    <mat-icon aria-label=\"user\" color=\"accent\" matTooltip=\"github project...\">cloud_circle</mat-icon>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/cover/cover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_animations__ = __webpack_require__("../../../../../src/app/app.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CoverComponent = (function () {
    function CoverComponent(router, app) {
        this.router = router;
        this.app = app;
        this.title = 'Echo Service';
        this.github = '' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].github;
        this.footer = 'echo-service v.?';
    }
    CoverComponent.prototype.message = function () {
        var app = this.app || {};
        var scenario = (app['info'] || {})['scenario'] || {};
        this.footer = 'echo-service v.' + ((app['info'] || {})['ver'] || '?');
        return app['loading'] ? 'loading scenario...' : (scenario['name'] || 'unknown scenario');
    };
    CoverComponent.prototype.go = function () {
        if (!(this.app || {})['loading']) {
            var route = (this.app || {})['error'] ? '/settings' : '/scenario';
            this.router.navigate([route]);
        }
    };
    CoverComponent.prototype.ngOnInit = function () {
        this.app.refresh();
    };
    CoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cover',
            template: __webpack_require__("../../../../../src/app/pages/cover/cover.component.html"),
            animations: [__WEBPACK_IMPORTED_MODULE_3__app_animations__["a" /* fadeAnimation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]])
    ], CoverComponent);
    return CoverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/custom/custom.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-editor .custom-calls-urls {\r\n  width: 848px; }\r\n  .custom-editor .custom-calls-urls .resp-type {\r\n    position: absolute;\r\n    right: 0;\r\n    opacity: .5; }\r\n.custom-editor .call-item {\r\n  height: 32px; }\r\n.custom-editor .response-editor codemirror {\r\n  background-color: rgba(1, 1, 1, 0.1);\r\n  margin-top: 10px; }\r\n.custom-editor .response-editor .response-values .mat-list-item {\r\n  background-color: #222;\r\n  margin-bottom: 2px; }\r\n.custom-editor .response-editor .response-values .value-type {\r\n  position: absolute;\r\n  right: 180px;\r\n  opacity: .4; }\r\n.custom-editor .request-rules .mat-list-item {\r\n  height: auto;\r\n  background-color: rgba(1, 1, 1, 0.1);\r\n  margin-bottom: 4px; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/custom/custom.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container layout-fill\">\r\n  <app-browser></app-browser>\r\n  <div class=\"page-editor custom-editor echo-scrollbar\">\r\n    <app-page-header [options]=\"header\"></app-page-header>\r\n    <app-new-element></app-new-element>\r\n    <div class=\"page-cards\" *ngIf=\"browser.current\">\r\n      <mat-card>\r\n        <mat-card-header>\r\n          <mat-card-title>VIRTUAL SERVICE</mat-card-title>\r\n          <mat-slide-toggle class=\"top-right\" [(ngModel)]=\"browser.current.active\">Active</mat-slide-toggle>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <div layout-row>\r\n            <mat-form-field layout-70>\r\n              <input matInput [(ngModel)]=\"browser.current.name\" placeholder=\"Name\">\r\n            </mat-form-field>\r\n            <mat-form-field layout-30>\r\n              <input matInput [(ngModel)]=\"browser.current.path\" placeholder=\"Path\">\r\n            </mat-form-field>\r\n          </div>\r\n        </mat-card-content>\r\n        <mat-card-actions layout-right>\r\n          <button mat-raised-button color=\"accent\" (click)=\"newCall()\">NEW CALL</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n      <!-- CALLS -->\r\n      <mat-nav-list class=\"custom-calls-urls\">\r\n        <mat-list-item *ngFor=\"let call of browser.current.calls||[]\" (click)=\"selectCall(call)\"\r\n                       class=\"call-item\" [ngClass]=\"{'accent':currentCall === call}\">\r\n          <mat-icon aria-label=\"call\">label</mat-icon>\r\n          <span class=\"code verb\">{{call.verb||'GET'}}</span> &gt; <span class=\"code url\">{{call._url||call.path}}</span>\r\n          <mat-icon class=\"resp-type\" aria-label=\"resp type\">{{respIcon(call.respType)}}</mat-icon>\r\n        </mat-list-item>\r\n      </mat-nav-list>\r\n      <!-- CALL -->\r\n      <mat-card *ngIf=\"currentCall\">\r\n        <mat-card-header>\r\n          <mat-card-title>CALL OPTIONS</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <div layout-row>\r\n            <mat-form-field layout-30>\r\n              <input class=\"code\" matInput [(ngModel)]=\"currentCall.verb\" placeholder=\"Verb\" (ngModelChange)=\"refreshUrl()\">\r\n            </mat-form-field>\r\n            <mat-form-field layout-70>\r\n              <input class=\"code\" matInput [(ngModel)]=\"currentCall.path\" placeholder=\"Path\" (ngModelChange)=\"refreshUrl()\">\r\n            </mat-form-field>\r\n          </div>\r\n        </mat-card-content>\r\n        <mat-card-actions layout-right>\r\n          <button mat-button ngxClipboard [cbContent]=\"currentCall._url\">COPY URL</button>\r\n          <button mat-raised-button color=\"warn\" (click)=\"deleteCall()\">DELETE CALL</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n\r\n      <!-- CALL REQUEST -->\r\n      <mat-card *ngIf=\"currentCall\">\r\n        <mat-card-header>\r\n          <mat-card-title class=\"accent-color\">REQUEST</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <mat-list class=\"request-rules\">\r\n            <div *ngIf=\"!(currentCall.rules||[]).length\" class=\"grey-text text-center\">Insert here one or more request validation rules...</div>\r\n            <mat-list-item *ngFor=\"let r of currentCall.rules||[]\">\r\n              <div class=\"amici\" layout-col>\r\n                <div layout-row>\r\n                  <mat-form-field layout-30>\r\n                    <input class=\"code\" matInput [(ngModel)]=\"r.path\" placeholder=\"path/name\">\r\n                  </mat-form-field>\r\n                  <mat-form-field layout-70>\r\n                    <input class=\"code code-color\" matInput [(ngModel)]=\"r.expression\" placeholder=\"validation expression\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div layout-row>\r\n                  <mat-form-field layout-70>\r\n                    <input class=\"code error\" matInput [(ngModel)]=\"r.error\" placeholder=\"error message\">\r\n                  </mat-form-field>\r\n                  <mat-form-field layout-30>\r\n                    <input class=\"code error\" type=\"number\" matInput [(ngModel)]=\"r.code\" placeholder=\"error code\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <button mat-icon-button (click)=\"removeRule(r)\" matTooltip=\"delete rule\">\r\n                <mat-icon aria-label=\"delete value\">close</mat-icon>\r\n              </button>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </mat-card-content>\r\n        <mat-card-actions layout-right>\r\n          <button mat-raised-button color=\"accent\" (click)=\"newRule()\">NEW RULE</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n\r\n      <!-- CALL RESPONSE -->\r\n      <mat-card *ngIf=\"currentCall\">\r\n        <mat-card-header>\r\n          <mat-card-title class=\"accent-color\">RESPONSE</mat-card-title>\r\n          <mat-button-toggle-group class=\"top-right\" #group=\"matButtonToggleGroup\" [(ngModel)]=\"currentCall.respType\" >\r\n            <mat-button-toggle matTooltip=\"response as object\" value=\"object\">\r\n              <mat-icon>{{respIcon()}}</mat-icon>\r\n            </mat-button-toggle>\r\n            <mat-button-toggle matTooltip=\"response as file\" value=\"file\">\r\n              <mat-icon>{{respIcon('file')}}</mat-icon>\r\n            </mat-button-toggle>\r\n          </mat-button-toggle-group>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <div class=\"response-editor\" *ngIf=\"currentCall.respType !== 'file'\" layout-col>\r\n            <codemirror #cmeditor [(ngModel)]=\"currentCall.response\" [config]=\"config\"></codemirror>\r\n            <mat-list class=\"response-values\">\r\n              <mat-list-item *ngFor=\"let v of currentCall.values||[]\">\r\n                <mat-icon aria-label=\"call\">label</mat-icon>\r\n                <span class=\"value-name\">{{v.name}}</span>\r\n                <span class=\"value-type\">{{v.type}}</span>\r\n                <div class=\"on-right\" layout-row>\r\n                  <button mat-icon-button (click)=\"insertValue(v)\" matTooltip=\"insert value\">\r\n                    <mat-icon aria-label=\"insert value\">play_for_work</mat-icon>\r\n                  </button>\r\n                  <button mat-icon-button (click)=\"editValue(v)\" matTooltip=\"edit value\">\r\n                    <mat-icon aria-label=\"edit value\">edit</mat-icon>\r\n                  </button>\r\n                  <button mat-icon-button (click)=\"removeValue(v)\" matTooltip=\"delete value\">\r\n                    <mat-icon aria-label=\"delete value\">close</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </mat-list-item>\r\n            </mat-list>\r\n          </div>\r\n          <div class=\"v-margin-20\" *ngIf=\"currentCall.respType === 'file'\" layout-row>\r\n            <mat-form-field layout-100>\r\n              <input code matInput [(ngModel)]=\"currentCall.file\" placeholder=\"file\">\r\n            </mat-form-field>\r\n          </div>\r\n        </mat-card-content>\r\n        <mat-card-actions layout-right>\r\n          <button *ngIf=\"currentCall.respType !== 'file'\" mat-raised-button color=\"accent\" (click)=\"newValue()\">NEW VALUE</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n    <app-debug-pre></app-debug-pre>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/custom/custom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_browser_service__ = __webpack_require__("../../../../../src/app/services/browser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__ = __webpack_require__("../../../../../src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_settings_service__ = __webpack_require__("../../../../../src/app/services/user-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_codemirror_mode_javascript_javascript__ = __webpack_require__("../../../../codemirror/mode/javascript/javascript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_codemirror_mode_javascript_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_codemirror_mode_javascript_javascript__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CUSTOM_PATH_PREFIX = 'api/test';
var CustomComponent = (function () {
    function CustomComponent(browser, interaction, u, user, cart, dialogs) {
        this.browser = browser;
        this.interaction = interaction;
        this.u = u;
        this.user = user;
        this.cart = cart;
        this.dialogs = dialogs;
        this.header = {};
        this.config = {};
        this.currentCall = null;
        var self = this;
        self.config = {
            lineNumbers: true,
            mode: 'javascript',
            theme: 'blackboard'
        };
        self.browser.register({
            type: self.interaction.types.custom,
            onSelect: function () { return self.onSelectCustom(); },
            template: {
                name: 'New Service',
                path: 'service',
                active: true,
                calls: []
            }
        });
        self.header = {
            title: function () { return (self.browser.currentInfo || {}).name; },
            isNew: function () { return (self.browser.current || {})._new; },
            buttons: [{
                    icon: 'add_circle_outline',
                    tooltip: 'Add a new custom service',
                    visible: function () { return !!self.browser.current; },
                    action: function () { return self.browser.newElement(); }
                }, {
                    icon: 'save',
                    tooltip: 'Save modifies',
                    visible: function () { return !!self.browser.current; },
                    action: function () {
                        self._rebuildPaths(self.browser.current);
                        self.browser.save('Service successfully updated!');
                    }
                }, {
                    icon: 'add_shopping_cart',
                    tooltip: 'Add to cart',
                    visible: function () { return !!self.browser.current; },
                    disabled: function () { return cart.contains(self.browser.current); },
                    action: function () { return cart.add(self.browser.current); }
                }, {
                    icon: 'delete',
                    tooltip: 'Remove service',
                    color: 'warn',
                    visible: function () { return !!self.browser.current; },
                    action: function () { return self.browser.delete('Delete current virtual service?'); }
                }]
        };
    }
    CustomComponent_1 = CustomComponent;
    CustomComponent._respIcon = function (type) {
        switch (type) {
            case 'file':
                return 'insert_drive_file';
            default:
                return 'code';
        }
    };
    CustomComponent.prototype._rebuildPaths = function (o) {
        var self = this;
        if (o) {
            o.paths = '';
            (o.calls || []).forEach(function (c) { return o.paths += (self.u.checkUrl(CUSTOM_PATH_PREFIX, o.path, c.path) + ';'); });
        }
    };
    CustomComponent.prototype._replaceSelection = function (txt) {
        if (!this.cmeditor) {
            return;
        }
        var doc = this.cmeditor.instance.getDoc();
        doc.replaceSelection(txt);
    };
    CustomComponent.prototype.respIcon = function (type) {
        return CustomComponent_1._respIcon(type);
    };
    CustomComponent.prototype.newCall = function () {
        var self = this;
        var path = self.u.getNewName((self.browser.current || {}).calls, 'new-call', 'path');
        var call = {
            verb: 'get',
            path: path,
            respType: 'object',
            rules: [],
            values: [],
            response: '{}'
        };
        ((self.browser.current || {}).calls || []).push(call);
        self.refreshUrl(call);
        this.currentCall = call;
    };
    CustomComponent.prototype.selectCall = function (call) {
        this.currentCall = call;
    };
    CustomComponent.prototype.deleteCall = function () {
        var self = this;
        var pos = ((self.browser.current || {}).calls || []).indexOf(this.currentCall);
        if (pos < 0) {
            return;
        }
        self.browser.current.calls.splice(pos, 1);
        self.currentCall = null;
    };
    CustomComponent.prototype.newRule = function () {
        this.currentCall.rules.push({
            path: '',
            expression: '',
            error: '',
            code: 500
        });
    };
    CustomComponent.prototype.removeRule = function (r) {
        __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.pull(this.currentCall.rules, r);
    };
    CustomComponent.prototype.onSelectCustom = function () {
        var self = this;
        ((self.browser.current || {}).calls || []).forEach(function (call) {
            call._url = self.user.getUrl(CUSTOM_PATH_PREFIX, self.browser.current.path || 'undefined', call.path || 'undefined');
            call.respType = call.respType || 'object';
            if (__WEBPACK_IMPORTED_MODULE_7_lodash___default.a.isObject(call.response)) {
                call.response = JSON.stringify(call.response, null, 2);
            }
        });
        self.currentCall = null;
    };
    CustomComponent.prototype.newValue = function () {
        var self = this;
        var name = self.u.getNewName((self.browser.current || {}).values, 'value');
        self.currentCall.values.push({
            name: name,
            type: 'manual'
        });
    };
    CustomComponent.prototype.insertValue = function (v) {
        this._replaceSelection('{{' + v.name + '}}');
    };
    CustomComponent.prototype.editValue = function (v) {
        this.dialogs.editValue(v);
    };
    CustomComponent.prototype.removeValue = function (v) {
        __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.pull(this.currentCall.values, v);
    };
    CustomComponent.prototype.refreshUrl = function (call) {
        var self = this;
        call = call || self.currentCall;
        call._url = self.user.getUrl(CUSTOM_PATH_PREFIX, self.browser.current.path || 'undefined', call.path || 'undefined');
    };
    CustomComponent.prototype.ngOnInit = function () {
    };
    CustomComponent.prototype.ngOnDestroy = function () {
        this.browser.deregister();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cmeditor'),
        __metadata("design:type", Object)
    ], CustomComponent.prototype, "cmeditor", void 0);
    CustomComponent = CustomComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-custom',
            template: __webpack_require__("../../../../../src/app/pages/custom/custom.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/custom/custom.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_browser_service__["a" /* BrowserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__["a" /* InteractionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_settings_service__["a" /* UserSettingsService */],
            __WEBPACK_IMPORTED_MODULE_5__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_6__services_dialogs_service__["a" /* DialogsService */]])
    ], CustomComponent);
    return CustomComponent;
    var CustomComponent_1;
}());

/**
"calls": [
    {
      "response": {
        "value": "{{zibibbo}}",
        "data": "{{records}}"
      },
      "verb": "get",
      "path": "zanza",
      "_id": "5a2a7f8c69996c6c2a7fcfc7",
      "values": [
        {
          "name": "zibibbo",
          "type": "manual",
          "_id": "5a2ae0d1d0ba9ef81f322cab"
        },
        {
          "settings": {
            "autoCol": true,
            "columns": [],
            "colCount": 8,
            "rowCount": 100
          },
          "name": "records",
          "type": "data",
          "_id": "5a2ae0d1d0ba9ef81f322caa"
        }
      ],
      "rules": []
    },
    {
      "response": {
        "no": "si"
      },
      "verb": "get",
      "path": "paranza",
      "_id": "5a2a7f8c69996c6c2a7fcfc6",
      "values": [],
      "rules": []
    },
    {
      "respType": "file",
      "file": "C:\\Canistracci\\RKS\\RKS-dubbiebbag.docx",
      "verb": "get",
      "path": "ponza",
      "_id": "5a2a7f8c69996c6c2a7fcfc5",
      "values": [],
      "rules": []
    }
  ],
*/


/***/ }),

/***/ "../../../../../src/app/pages/documents/documents.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container layout-fill\">\n  <app-browser></app-browser>\n  <div class=\"page-editor echo-scrollbar\" flex>\n    <app-page-header [options]=\"header\"></app-page-header>\n    <app-new-element></app-new-element>\n    <textarea *ngIf=\"!!(browser||{}).current\" class=\"echo-scrollbar text-editor\" [(ngModel)]=\"(browser||{}).current_str\" layout-fill></textarea>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/documents/documents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_browser_service__ = __webpack_require__("../../../../../src/app/services/browser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__ = __webpack_require__("../../../../../src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DocumentsComponent = (function () {
    function DocumentsComponent(browser, interaction, u, cart) {
        this.browser = browser;
        this.interaction = interaction;
        this.u = u;
        this.cart = cart;
        this.header = {};
        var self = this;
        self.browser.register({
            type: 'documents',
            description: function (d) { return self.browser.options.showAll ? d._type : ''; }
        });
        self.header = {
            title: function () { return (self.browser.currentInfo || {}).name; },
            buttons: [{
                    icon: 'gps_off',
                    tooltip: 'All document types',
                    color: 'warn',
                    selected: function () { return self.browser.options.showAll; },
                    action: function () {
                        self.browser.options.showAll = !self.browser.options.showAll;
                        self.browser.refresh();
                    }
                }, {
                    icon: 'save',
                    tooltip: 'Save modifies',
                    visible: function () { return !!self.browser.current; },
                    action: function () {
                        self.u.confirm({
                            message: 'Save document modifies?',
                            ok: 'Ok',
                            cancel: 'Cancel'
                        }, function (data) {
                            if (data.resp === 'ok') {
                                self.browser.current = JSON.parse(self.browser.current_str);
                                self.browser.save('Document successfully updated!');
                            }
                        });
                    }
                }, {
                    icon: 'add_shopping_cart',
                    tooltip: 'Add to cart',
                    visible: function () { return !!self.browser.current; },
                    disabled: function () { return cart.contains(self.browser.current); },
                    action: function () { return cart.add(self.browser.current); }
                }, {
                    icon: 'delete',
                    tooltip: 'Remove document',
                    color: 'warn',
                    disabled: function () { return !self.browser.current; },
                    action: function () { return self.browser.delete(); }
                }]
        };
    }
    DocumentsComponent.prototype.ngOnInit = function () {
    };
    DocumentsComponent.prototype.ngOnDestroy = function () {
        this.browser.deregister();
    };
    DocumentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-documents',
            template: __webpack_require__("../../../../../src/app/pages/documents/documents.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_browser_service__["a" /* BrowserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__["a" /* InteractionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_cart_service__["a" /* CartService */]])
    ], DocumentsComponent);
    return DocumentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container help-viewer layout-fill\">\n  <div class=\"scenario-toolbox toolbox float-left echo-scrollbar\">\n    <div class=\"toolbox-header\">\n      <input placeholder=\"search...\" [(ngModel)]=\"searchTerm\" (change)=\"refresh()\">\n      <button *ngIf=\"searchTerm\" class=\"clear-button\" mat-icon-button (click)=\"clearSearch()\">\n        <mat-icon aria-label=\"clear button\">close</mat-icon>\n      </button>\n    </div>\n    <div class=\"toolbox-items echo-scrollbar\">\n      <mat-nav-list>\n        <mat-list-item *ngFor=\"let i of helpItems\" (click)=\"select(i)\"\n                       [ngClass]=\"{'accent':i === current}\">\n          <span class=\"help-item-name\">{{i.caption || i.tooltip}}</span>\n        </mat-list-item>\n      </mat-nav-list>\n    </div>\n  </div>\n  <div class=\"page-editor echo-scrollbar\" flex>\n    <app-page-header [options]=\"header\"></app-page-header>\n    <app-help-browser [map]=\"cmpRef.instance.map\" (goTo)=\"goto($event)\"></app-help-browser>\n    <div id=\"__top__\" #target></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_pages_service__ = __webpack_require__("../../../../../src/app/services/app-pages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("../../../../@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HelpComponent = (function () {
    function HelpComponent(router, app, u, resolver, scroll) {
        this.router = router;
        this.app = app;
        this.u = u;
        this.resolver = resolver;
        this.scroll = scroll;
        this._initialized = false;
        this._defaultPageId = '';
        this.header = {};
        this.helpItems = [];
        this.current = null;
        this.searchTerm = '';
        var self = this;
        self.header = {
            title: function () { return (self.current || {}).caption || (self.current || {}).tooltip; },
            buttons: []
        };
        self._defaultPageId = app.getHelpDefault();
        self.helpItems = app.getHelpPages();
        router.events.subscribe(function (event) {
            var nurl = event['url'];
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* NavigationEnd */]) {
                self.u.parseUrlId(nurl, function (url, id) {
                    if (url === '/help' && self._pageId !== id) {
                        self.load(id);
                    }
                });
            }
        });
    }
    HelpComponent.prototype._clear = function () {
        var self = this;
        self.current = null;
        if (self.cmpRef) {
            self.cmpRef.destroy();
            self.cmpRef = null;
        }
    };
    HelpComponent.prototype.ngOnInit = function () {
        var self = this;
        self._initialized = true;
        self.load(self._pageId);
    };
    HelpComponent.prototype.ngOnDestroy = function () {
        this._clear();
    };
    HelpComponent.prototype.goto = function (target, duration) {
        if (duration === void 0) { duration = 650; }
        var config = { target: target, offset: -64, duration: duration };
        this.scroll.scrollTo(config);
    };
    HelpComponent.prototype.load = function (id) {
        var self = this;
        self._pageId = id;
        self._clear();
        if (id && self._initialized) {
            if (id === '*') {
                id = self._defaultPageId;
            }
            this.current = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.find(this.app.pages, function (p) { return p.type === id; });
            var name_1 = self.u.upperFirst(id) + 'HelpComponent';
            var factories = Array.from(this.resolver['_factories'].keys());
            var factoryClass = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.find(factories, function (f) { return f.name === name_1; });
            if (factoryClass) {
                var factory = this.resolver.resolveComponentFactory(factoryClass);
                this.cmpRef = this.target.createComponent(factory);
                this.goto('__top__', 0);
            }
        }
    };
    HelpComponent.prototype.refresh = function () {
    };
    HelpComponent.prototype.clearSearch = function () {
        this.searchTerm = '';
        this.refresh();
    };
    HelpComponent.prototype.select = function (i) {
        this.router.navigate(['help', i.type]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('target', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], HelpComponent.prototype, "target", void 0);
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help',
            template: __webpack_require__("../../../../../src/app/pages/help/help.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_app_pages_service__["a" /* AppPagesService */],
            __WEBPACK_IMPORTED_MODULE_1__services_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_4__nicky_lenaers_ngx_scroll_to__["b" /* ScrollToService */]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/help/pages/api-help.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"help-api\">\n  <div class=\"api-route\" *ngFor=\"let api of apis\">\n    <h1>{{api.description}}</h1>\n    <ng-container *ngFor=\"let route of api.routes\">\n      <p grey class=\"api-desc\" [id]=\"route._id\">{{route.description}}</p>\n      <div class=\"api-call\" [ngClass]=\"'call-type-' + route.verb\">\n        <h3><span class=\"verb\">{{route.verb}}</span> <span class=\"host\">http://&#123;server&#125;:&#123;port&#125;/</span>{{route.route}}</h3>\n        <div class=\"api-details\">\n          <app-object-viewer *ngIf=\"route._body\" [element]=\"route._body\" [icon]=\"'forward'\"></app-object-viewer>\n          <p *ngIf=\"route._body_str\"><span grey>Request: </span>{{route._body_str}}</p>\n          <p *ngIf=\"(route.response||{}).type\"><span grey>Response type: </span>{{route.response.type}}</p>\n          <app-object-viewer class=\"response\" *ngIf=\"route._response\" [element]=\"route._response\" [icon]=\"'forward'\"></app-object-viewer>\n          <p *ngIf=\"route._response_str\"><span grey>Response: </span>{{route._response_str}}</p>\n        </div>\n        <button class=\"test-button\" mat-icon-button (click)=\"openTest(route)\" matTooltip=\"Test this api\">\n          <mat-icon>play_circle_outline</mat-icon>\n        </button>\n      </div>\n    </ng-container>\n  </div>\n  <app-api-tester [(test)]=\"apiTest\"></app-api-tester>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/help/pages/api-help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_interaction_service__ = __webpack_require__("../../../../../src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiHelpComponent = (function () {
    function ApiHelpComponent(interaction, u) {
        this.interaction = interaction;
        this.u = u;
        this.apis = [];
        this.map = [];
        this.apiTest = { show: false };
    }
    ApiHelpComponent.prototype.openTest = function (route) {
        if (!this.apiTest.running) {
            this.apiTest.path = route.route;
            this.apiTest.verb = route.verb;
            this.apiTest.body = null;
            this.apiTest.response = null;
        }
        this.apiTest.show = true;
    };
    ApiHelpComponent.prototype._object = function (o) {
        var po = [];
        __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.keys(o).forEach(function (k) { return po.push({ name: k, type: o[k].type, description: o[k].description }); });
        return po;
    };
    ApiHelpComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        self.map = [];
        self.interaction.api(function (apis) {
            (apis || []).forEach(function (api) {
                self.map.push({ title: api.description });
                (api.routes || []).forEach(function (r) {
                    r._response = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isObject((r.response || {}).object) ? self._object(r.response.object) : null;
                    r._response_str = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isString(r.response) ? r.response : (r.response || {}).description;
                    r._body = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isObject(r.body) ? self._object(r.body) : null;
                    r._body_str = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isString(r.body) ? r.body : null;
                    r._id = _this.u.getHtmlId(r.description);
                    self.map.push({ id: r._id, desc: r.description });
                });
            });
            self.apis = apis;
        });
    };
    ApiHelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-api-help',
            template: __webpack_require__("../../../../../src/app/pages/help/pages/api-help.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_interaction_service__["a" /* InteractionService */],
            __WEBPACK_IMPORTED_MODULE_2__services_utils_service__["a" /* UtilsService */]])
    ], ApiHelpComponent);
    return ApiHelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/help/pages/connections-help.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"help-connections-types\">\n  <p>Definizione della connessione:</p>\n  <img src=\"./assets/help/connections1.png\">\n  <p>Se una connessione non è attiva la richiesta dati non avrà successo.</p>\n  <p>Provider utilizzabili al momento (v2.0.6):</p>\n  <ol>\n    <li>Windows SQL Server</li>\n    <li>MY-SQL</li>\n    <li>Oracle</li>\n  </ol>\n  <p>Proprietà della connessione/ connection string:</p>\n  <img src=\"./assets/help/connections2.png\">\n</div>\n<div id=\"help-connections-actions\">\n  <p>Azioni previste dall'editor:</p>\n  <img src=\"./assets/help/connections0.png\">\n  <p>\n    <button mat-icon-button>\n      <mat-icon>add_circle_outline</mat-icon>\n    </button>\n    Aggiunge una nuova connessione.\n  </p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>save</mat-icon>\n    </button>\n    Salva la connessione.\n  </p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>add_shopping_cart</mat-icon>\n    </button>\n    Aggiunge l'elemento selezionato all'elenco degli ogetti condivisibili.\n  </p>\n  <p>\n    <button mat-icon-button color=\"warn\">\n      <mat-icon>delete</mat-icon>\n    </button>\n    Elimina la connessione selezionata.\n  </p>\n</div>\n<div divider></div>\n<div faq id=\"help-connections-create\">\n  <h1>Effettuare il test di una connessione</h1>\n  <ol>\n    <li>\n      Riempire tutti i campi necessari\n    </li>\n    <li>\n      Premere il pulsante\n      <button mat-raised-button color=\"warn\">TEST</button>\n    </li>\n  </ol>\n  <p>Gli eventuali errori nel test della connessione vengono mostrati immediatamente sotto la sezione\n    relativa ai dati di connessione.</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/help/pages/connections-help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionsHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConnectionsHelpComponent = (function () {
    function ConnectionsHelpComponent() {
        this.map = [{
                id: 'help-connections-types',
                desc: 'Definizione'
            }, {
                id: 'help-connections-actions',
                desc: 'Azioni possibili'
            }, {
                title: 'faqs'
            }, {
                id: 'help-connections-create',
                desc: 'Test di una connessione'
            }];
    }
    ConnectionsHelpComponent.prototype.ngOnInit = function () {
    };
    ConnectionsHelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-connections-help',
            template: __webpack_require__("../../../../../src/app/pages/help/pages/connections-help.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ConnectionsHelpComponent);
    return ConnectionsHelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/help/pages/custom-help.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"help-custom\">\n  <p>Un server virtuale è un oggetto che contiene la definizione di un certo numero di rotte a cui il server può\n    risponde in svariati modi.</p>\n  <p>Inizialmente è richiesta la definizione di base:</p>\n  <img src=\"./assets/help/custom1.png\">\n  <p>Oltre al nome del servizio virtuale è richiesta la definizione del path principale (PATH-SERVICE). La struttura\n    del path finale infatti, relativo ad una specifica chiamata sarà qualcosa del tipo:</p>\n  <p code>&#123;SERVER-HOST&#125;&#47;api&#47;test&#47;&#123;PATH-SERVICE&#125;&#47;&#123;PATH-CALL&#125;&#63;&#123;PARAMETERS&#125;</p>\n  <p>Se un virtual-service non è attivo ogni chiamata non avrà successo.</p>\n</div>\n<div id=\"help-custom-call\">\n  <h1>Call</h1>\n  <p>Di seguito appare l'elenco delle chiamate disponibili per questo servizio:</p>\n  <img src=\"./assets/help/custom2.png\">\n  <p>Ogni chiamata possibile è preceduta dal verbo richiesto e sulla destra è mostrata un'icona che evidenzia il tipo\n    di risposta restituita.</p>\n  <p>Selezionando una delle chiamate, nell'area sottostante appaiono le sezioni seguenti:</p>\n  <img src=\"./assets/help/custom3.png\">\n  <p>La prima permette di definire sia il verbo che la rotta finale della chiamata.</p>\n  <p>In questa sezione è possibile eliminare la singola chiamata tramite il pulsante\n    <button mat-raised-button color=\"warn\">DELETE CALL</button>, inoltre è possibile copiare l'url complessivo\n    negli appunti <button mat-raised-button>COPY URL</button> per testarlo in altro contesto (ad esempio, per le \"get\", in un tab apposito)\n  </p>\n</div>\n<div id=\"help-custom-call-rules\">\n  <h1>Validazione della request</h1>\n  <p>A seguire la sezione per la definizione delle regole di validazione della richiesta:</p>\n  <img src=\"./assets/help/custom4.png\">\n  <p>Ogni regola prevede l'individuazione di un valore di riferimento tra i parametri o nel body (secondo la tipologia\n    di chiamata (get, post, ecc..)). Tale valore, raggiungibile da un path o direttamente dal nome è poi utilizzabile\n    nel campo dell'espressione di validazione con il bookmark <span highlight>value</span>.</p>\n  <p>L'espressione di validazione quindi prevede di rispondere con un errore e relativo codice nel caso in cui non\n    sia soddisfatta (risultato diverso da <span highlight>true</span>)</p>\n</div>\n<div id=\"help-custom-call-values\">\n  <h1>Composizione della response</h1>\n  <p>Se le condizioni di validità della richiesta sono risolte (o sono assenti) la risposta viene composta secondo\n    le opzioni della successiva sezione.</p>\n  <p>Sono due le tipologie di risposta presenti al momento.</p>\n  <ol>\n    <li>\n      <button mat-icon-button><mat-icon>code</mat-icon></button>: la risposta sarà un json (quindi un oggetto javascript)\n      dove è possibile inserire alcuni campi speciali:\n      <img src=\"./assets/help/custom5.png\">\n      I campi speciali sono presenti nel json come bookmarks racchiusi tra doppie graffe. La definizione invece è\n      delegata ad un editor popup specifico per tipo di campo.\n      <p>Le azioni possibili su ogni campo sono:</p>\n      <p>\n        <button mat-icon-button>\n          <mat-icon>play_for_work</mat-icon>\n        </button>\n        Inserisce il campo nel punto del json selezionato o dove appare il cursore.\n      </p>\n      <p>\n        <button mat-icon-button>\n          <mat-icon>edit</mat-icon>\n        </button>\n        Accede all'editor (popup) per la modifica del campo.\n      </p>\n      <p>\n        <button mat-icon-button>\n          <mat-icon>close</mat-icon>\n        </button>\n        Elimina il campo.\n      </p>\n    </li>\n    <li>\n      <button mat-icon-button><mat-icon>insert_drive_file</mat-icon></button>: in tal caso la risposta sarà\n      costituita da un file:\n      <img src=\"./assets/help/custom6.png\">\n      si dovrà quindi indicarne il path assoluto accessibile dal server.\n    </li>\n  </ol>\n</div>\n<div id=\"help-custom-actions\">\n  <p>Azioni previste dall'editor:</p>\n  <img src=\"./assets/help/custom0.png\">\n  <p>\n    <button mat-icon-button>\n      <mat-icon>add_circle_outline</mat-icon>\n    </button>\n    Aggiunge un nuovo virtual-service.\n  </p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>save</mat-icon>\n    </button>\n    Salva lle modifiche apportate.\n  </p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>add_shopping_cart</mat-icon>\n    </button>\n    Aggiunge l'elemento selezionato all'elenco degli ogetti condivisibili.\n  </p>\n  <p>\n    <button mat-icon-button color=\"warn\">\n      <mat-icon>delete</mat-icon>\n    </button>\n    Elimina il servizio selezionato.\n  </p>\n</div>\n<div divider></div>\n<div id=\"help-custom-values\">\n  <h1>Campi speciali</h1>\n  <p>Sono al momento previsti due tipi di campi speciali utilizzabili nelle risposte alle chiamate dei custom-services:</p>\n  <h2>Manual</h2>\n  <p>Rappresenta un valore che l'utente può indicare manualmente tramite un'espressione:</p>\n  <img src=\"./assets/help/custom7.png\">\n  <p>Nell'editor è richiesta la definizione del nome (che apparirà nel bookmark) e dell'espressione associata.</p>\n  <p>Tale espressione può essere funzione dell'ogetto <span highlight>params</span> cioè dei parametri dell'url, oppure\n    dell'ogetto <span highlight>data</span> che rappresenta il body per le chiamate che lo prevedono.</p>\n  <p>Nelle espressioni è utilizzabile <span highlight>_</span>.</p>\n  <h2>Data</h2>\n  <p>Questo tipo di campo permette di inserire un array di oggetti che definiscono dei record.</p>\n  <p>Se è spuntata l'opzione <span highlight>Auto column generation</span> è richiesta la valorizzazione soltanto\n    del numero di colonne e righe:</p>\n  <img src=\"./assets/help/custom8.png\">\n  <p>In tal caso la determinzione della tipologia di colonna sarà casuale.</p>\n  <p>Se si desidera descrivere lo schema si deve deselezionare l'opzione di generazione automatica delle colonne e procedere\n  all'inserimento di ognuna tramite il pulsante <button mat-button color=\"accent\">NEW COLUMN</button>:</p>\n  <img src=\"./assets/help/custom9.png\">\n  <p>Per ogni colonna va indicato il nome ed il tipo a scelta tra quelli disponibili:</p>\n  <ol>\n    <li>Text</li>\n    <li>Numeric</li>\n    <li>Integer</li>\n    <li>Date</li>\n    <li>Boolean</li>\n  </ol>\n  <p>Oltre a questo, il numero di record restituiti.</p>\n</div>\n<div divider></div>\n<div faq id=\"help-custom-response-recordset\">\n  <h1>Restituire un recordset con schema definito</h1>\n  <ol>\n    <li>Creare la call get o post a cui il server risponderà con un oggetto contenente il recordset</li>\n    <li>Nella sezione della <span class=\"accent-color\">RESPONSE</span> aggiungere un nuovo valore usando\n      <button mat-raised-button color=\"accent\">NEW VALUE</button>\n    </li>\n    <li>Modificare il valore appena creato cliccando sul pulsante\n      <button mat-icon-button>\n        <mat-icon>edit</mat-icon>\n      </button>\n    </li>\n    <li>Scegliere il tipo <span highlight>Data</span> e togliere la spunta dall'opzione\n      <span highlight>Auto column generation</span> in modo da poter comporre lo schema come si desidera\n    </li>\n    <li>applicare le modifiche nell'editor del valore</li>\n    <li>nell'editor dell'oggetto della response costruire la struttura dell'oggetto fino alla proprietà che esporrà\n      il recordset, come valore ad essa immettere le doppie coppie di apici e posizionarsi con il cursore\n      all'interno di esse</li>\n    <li>Cliccare sul pulsante\n      <button mat-icon-button>\n        <mat-icon>play_for_work</mat-icon>\n      </button>\n      del valore scelto e modificato nei precedenti step per produrre il recordset\n    </li>\n  </ol>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/help/pages/custom-help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomHelpComponent = (function () {
    function CustomHelpComponent() {
        this.map = [{
                id: 'help-custom',
                desc: 'Servizi virtuali'
            }, {
                id: 'help-custom-call',
                desc: 'Definizione di chiamata'
            }, {
                id: 'help-custom-call-rules',
                desc: 'Regole di validazione per la request'
            }, {
                id: 'help-custom-call-values',
                desc: 'Composizione della response'
            }, {
                id: 'help-custom-actions',
                desc: 'Azioni possibili'
            }, {
                title: 'editor'
            }, {
                id: 'help-custom-values',
                desc: 'Campi speciali'
            }, {
                title: 'faqs'
            }, {
                id: 'help-custom-response-recordset',
                desc: 'Restituire un recordset con schema definito'
            }];
    }
    CustomHelpComponent.prototype.ngOnInit = function () {
    };
    CustomHelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-custom-help',
            template: __webpack_require__("../../../../../src/app/pages/help/pages/custom-help.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CustomHelpComponent);
    return CustomHelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/help/pages/documents-help.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"help-documents\">\n  <p>I documenti selezionati mostrano il loro contenuto come file json:</p>\n  <img src=\"./assets/help/documents0.png\">\n  <p>Il testo visibile è modificabile ed è possibile salvare le modifiche. Ovviamente tale operrazione può\n    compromettere la validità del documento che potrebbe non essere utilizzabile se le modifiche non sono fatte\n    prestando molta attenzione.</p>\n</div>\n<div id=\"help-documents-actions\">\n  <p>Azioni previste dall'editor:</p>\n  <img src=\"./assets/help/connections0.png\">\n  <p>\n    <button mat-icon-button>\n      <mat-icon>save</mat-icon>\n    </button>\n    Salva le modifiche al contenuto.\n  </p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>add_shopping_cart</mat-icon>\n    </button>\n    Aggiunge l'elemento selezionato all'elenco degli ogetti condivisibili.\n  </p>\n  <p>\n    <button mat-icon-button color=\"warn\">\n      <mat-icon>delete</mat-icon>\n    </button>\n    Elimina il documento selezionato.\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/help/pages/documents-help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentsHelpComponent = (function () {
    function DocumentsHelpComponent() {
        this.map = [{
                id: 'help-documents',
                desc: 'Definizione'
            }, {
                id: 'help-documents-actions',
                desc: 'Azioni possibili'
            }];
    }
    DocumentsHelpComponent.prototype.ngOnInit = function () {
    };
    DocumentsHelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-documents-help',
            template: __webpack_require__("../../../../../src/app/pages/help/pages/documents-help.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DocumentsHelpComponent);
    return DocumentsHelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/help/pages/previews-help.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"help-previews\">\n  <p>La selezione di un elemento mostra l'immagine dell'anteprima:</p>\n  <img src=\"./assets/help/previews0.png\">\n  <p>Non avendo nome associato viene mostrato l'identificativo della stessa.</p>\n</div>\n<div id=\"help-previews-actions\">\n  <p>Azioni previste dall'editor:</p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>delete_forever</mat-icon>\n    </button>\n    Elimina tutte le anteprime non utilizzate nei documenti.\n  </p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>add_shopping_cart</mat-icon>\n    </button>\n    Aggiunge l'elemento selezionato all'elenco degli ogetti condivisibili.\n  </p>\n  <p>\n    <button mat-icon-button color=\"warn\">\n      <mat-icon>delete</mat-icon>\n    </button>\n    Elimina l'anteprima selezionata.\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/help/pages/previews-help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewsHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreviewsHelpComponent = (function () {
    function PreviewsHelpComponent() {
        this.map = [{
                id: 'help-previews',
                desc: 'Definizione'
            }, {
                id: 'help-previews-actions',
                desc: 'Azioni possibili'
            }];
    }
    PreviewsHelpComponent.prototype.ngOnInit = function () {
    };
    PreviewsHelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-previews-help',
            template: __webpack_require__("../../../../../src/app/pages/help/pages/previews-help.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PreviewsHelpComponent);
    return PreviewsHelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/help/pages/queries-help.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"help-queries\">\n  <p>L'editor delle query prevede inanzi tutto la definizione delle proprietà di base:</p>\n  <img src=\"./assets/help/queries1.png\">\n  <p>Quali nome, descrizione, connessione di riferimento e flag di attività che se non spuntato\n    blocca l'esecuzione della stessa.</p>\n  <p>A seguire è mostrato l'elenco di parametri appartenenti alla query in una lista del tipo:</p>\n  <img src=\"./assets/help/queries2.png\">\n  <p>le azioni possibili su ogni parametro sono:</p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>star_border</mat-icon>\n    </button>\n    Aggiunge il parametro ai preferiti. In tal modo sarà possibile inserirne una copia in altre query.\n  </p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>play_for_work</mat-icon>\n    </button>\n    Inserisce il parametro nel punto della query selezionato o dove appare il cursore.\n  </p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>edit</mat-icon>\n    </button>\n    Accede all'editor (popup) per la modifica del parametro.\n  </p>\n  <p>\n    <button color=\"warn\" mat-icon-button>\n      <mat-icon>delete</mat-icon>\n    </button>\n    Elimina il parametro.\n  </p>\n  <p>Di seguito poi il corpo del testo che descrive la query affiancato dall'utility per l'esplorazione\n    degli oggetti contenuti nel database:</p>\n  <img src=\"./assets/help/queries3.png\">\n  <p>Se la query è stata eseguita almeno una volta è presente lo schema. Questo viene mostrato come elenco di\n    campi con proprietà in una tabella del tipo:</p>\n  <img src=\"./assets/help/queries4.png\">\n  <p>Una volta eseguita la query, sono mostrate nella successiva sezione le statistiche di esecuzione:</p>\n  <ul>\n    <li>Tempo di esecuzione</li>\n    <li>Records totali</li>\n    <li>Numeri di campi</li>\n  </ul>\n  <img src=\"./assets/help/queries5.png\">\n  <p>Quindi lo script SQL realmente eseguito sullo specifico provider:</p>\n  <img src=\"./assets/help/queries6.png\">\n  <p>Ed infine i dati ricevuti dal servizio:</p>\n  <img src=\"./assets/help/queries7.png\">\n</div>\n<div id=\"help-queries-sql\">\n  <h1>Specifiche sql</h1>\n  <p>Il parametro inserito nel codice SQL si presenterà con la sintassi:</p>\n  <p code><![CDATA[{{]]><![CDATA[=nome parametro}}]]></p>\n  <p>se si tratta di parametro opzionale è possibile utilizzare le seguenti sintassi:</p>\n  <p code><![CDATA[{{]]><![CDATA[IF nome parametro}}\n    --codice sql valido quando il parametro è attivo]]>\n    <![CDATA[{{]]><![CDATA[ENDIF}}]]></p>\n  <p code><![CDATA[{{]]><![CDATA[IF! nome parametro}}\n    --codice sql valido quando il parametro non è attivo]]>\n    <![CDATA[{{]]><![CDATA[ENDIF}}]]></p>\n</div>\n<div id=\"help-queries-actions\">\n  <p>Azioni previste dall'editor:</p>\n  <img src=\"./assets/help/queries0.png\">\n  <p>\n    <button mat-icon-button>\n      <mat-icon>add_circle_outline</mat-icon>\n    </button>\n    Aggiunge una nuova query.\n  </p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>flash_on</mat-icon>\n    </button>\n    Esegue la query.\n  </p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>save</mat-icon>\n    </button>\n    Salva la query.\n  </p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>add_shopping_cart</mat-icon>\n    </button>\n    Aggiunge l'elemento selezionato all'elenco degli ogetti condivisibili.\n  </p>\n  <p>\n    <button mat-icon-button color=\"warn\">\n      <mat-icon>delete</mat-icon>\n    </button>\n    Elimina la query selezionata.\n  </p>\n</div>\n<div divider></div>\n<div id=\"help-queries-parameters\">\n  <h1>Editor di parametri</h1>\n  <p>L'editor dei parametri prevede 4 tipologie di parametro:</p>\n  <ul>\n    <li>\n      <h2>Normal</h2>\n      <img class=\"small\" src=\"./assets/help/queries9.png\">\n      <p>Parametro standard dove, una volta definito il tipo dato è possibile impostarne il valore di default e\n        corrente ed attribuirne le proprietà di opzionale o \"in sola lettura\"</p>\n    </li>\n    <li>\n      <h2>System</h2>\n      <img class=\"small\" src=\"./assets/help/queries8.png\">\n      <p>Parametro di sistema. Sono previsti attualmente due parametri di sistema impostabili dalla\n        proprietà <span highlight>System Type</span>.</p>\n      <p>Il valore è in sola lettura essendo calcolato lato server.</p>\n    </li>\n    <li>\n      <h2>List</h2>\n      <img class=\"small\" src=\"./assets/help/queries10.png\">\n      <p>Questo parametro prevede un elenco di valori possibili definiti dall'utente.</p>\n      <p>Prevede un'opzione in più rispetto ai parametri standard, cioè la multiselezione degli elementi.</p>\n    </li>\n    <li>\n      <h2>Lookup</h2>\n      <img class=\"small\" src=\"./assets/help/queries11.png\">\n      <p>Come la lista, prevede un elenco di valori possibili che questa volta sono determinati dall'esecuzione di\n        un'altra query esistente. Per la descrizione mostrata ed il valore devono quindi essere indicati i relativi\n        campi della query scelta.</p>\n      <p>Come la lista, prevede un'opzione in più rispetto ai parametri standard, cioè la multiselezione degli elementi.</p>\n    </li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/help/pages/queries-help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueriesHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QueriesHelpComponent = (function () {
    function QueriesHelpComponent() {
        this.map = [{
                id: 'help-queries',
                desc: 'Editor di query'
            }, {
                id: 'help-queries-sql',
                desc: 'Specifiche SQL'
            }, {
                id: 'help-queries-actions',
                desc: 'Azioni possibili'
            }, {
                title: 'editor'
            }, {
                id: 'help-queries-parameters',
                desc: 'Editor dei Parametri'
            }];
    }
    QueriesHelpComponent.prototype.ngOnInit = function () {
    };
    QueriesHelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-queries-help',
            template: __webpack_require__("../../../../../src/app/pages/help/pages/queries-help.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], QueriesHelpComponent);
    return QueriesHelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/help/pages/scenario-help.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"help-scenario\">\n  <p>Lo scenario corrente si presenta con l'elenco degli elementi in rosso, e nella lista degli scenari disponibili\n    appare con una stella che ne precede il nome.</p>\n  <img src=\"./assets/help/scenarios2.png\">\n  <p>Solo per questo scenario (corrente) è possibile modificare il nome e salvare tale modifica</p>\n  <img src=\"./assets/help/scenarios1.png\">\n  <p>nella sezione appare (non modificabile) il nome del folder sul server dove risiede lo scenario:</p>\n  <p code>&#123;SERVER-PROJECT&#125;/api/scenario/data/&#123;FODER-SCENARIO&#125;</p>\n  <p>Sotto l'elenco degli oggetti disponibili e solo per lo scenario corrente, appare l'editor delle opzioni custom:</p>\n  <img src=\"./assets/help/scenarios4.png\">\n  <p>la stringa rappresenta un testo json che sarà salvato come oggetto nel file dello scenario nella property settings.</p>\n  <p>Gli altri scenari, una volta selezionati, mostrano i propri elementi elencati e enumerati, evidenziati:</p>\n  <img src=\"./assets/help/scenarios3.png\">\n</div>\n<div id=\"help-scenario-actions\">\n  <p>Azioni previste dall'editor:</p>\n  <img src=\"./assets/help/scenarios0.png\">\n  <p>\n    <button mat-icon-button color=\"warn\">\n      <mat-icon>star</mat-icon>\n    </button>\n    Imposta lo scenario selezionato come corrente (visibile per tutti gli scenari tranne il corrente).\n  </p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>save</mat-icon>\n    </button>\n    Salva le modifiche allo scenario (visibile solo per lo scenario corrente).\n  </p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>refresh</mat-icon>\n    </button>\n    Aggiorna l'elenco degli scenari.\n  </p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>add_circle_outline</mat-icon>\n    </button>\n    Aggiunge un nuovo scenario.\n  </p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>cloud_upload</mat-icon>\n    </button>\n    Permette di inviare uno scenario (xxx.zip file) al server che lo aggiunge all'elenco di quelli già presenti.\n  </p>\n  <p>\n    <button mat-icon-button>\n      <mat-icon>file_download</mat-icon>\n    </button>\n    Scarica lo scenario selezionato sotto forma di un unico file compresso.\n  </p>\n</div>\n<div divider></div>\n<div faq id=\"help-scenario-apply\">\n  <h1>Applicare uno scenario</h1>\n  <ol>\n    <li>\n      Selezionare lo scenario desiderato nell'elenco e premere\n      <button color=\"warn\" mat-icon-button>\n        <mat-icon>star</mat-icon>\n      </button>.\n    </li>\n  </ol>\n</div>\n<div faq id=\"help-scenario-creation\">\n  <h1>Creare un nuovo scenario</h1>\n  <ol>\n    <li>\n      Utilizzare la funzionalità\n      <button mat-icon-button>\n        <mat-icon>add_circle_outline</mat-icon>\n      </button>\n      per generare un nuovo scenario temporaneo.\n    </li>\n    <li>\n      Riempire il campo del nome e applicare lo scenario per rendere definitiva la generazione attraverso la funzione:\n      <button color=\"warn\" mat-icon-button>\n        <mat-icon>star</mat-icon>\n      </button>\n    </li>\n  </ol>\n</div>\n<div faq id=\"help-scenario-delete\">\n  <h1>Eliminare uno scenario</h1>\n  <p>Non è prevista l'eliminazione dall'editor, per farlo è sufficiente localizzare la cartella dove risiede lo scenario sul server:</p>\n  <p code>&#123;SERVER-PROJECT&#125;/api/scenario/data/&#123;FODER-SCENARIO&#125;</p>\n  <p>ed eliminarla (o spostarla). In questo modo lo scenario non sarà più distribuito dal server.</p>\n</div>\n<div faq id=\"help-scenario-share\">\n  <h1>Condividere uno scenario</h1>\n  <ol>\n    <li>Scaricare uno scenario selezionandolo e usando la funzionalità\n      <button mat-icon-button>\n        <mat-icon>file_download</mat-icon>\n      </button>\n    </li>\n    <li>Consegnare il file compresso ottenuto al destinatario</li>\n    <li>Sul pc target avviare echo-service ed utilizzare la funzionalità\n      <button mat-icon-button>\n        <mat-icon>cloud_upload</mat-icon>\n      </button>\n      per importare lo scenario\n    </li>\n  </ol>\n</div>\n<div faq id=\"help-scenario-share-objects\">\n  <h1>Passare oggetti da uno scenario ad un altro</h1>\n  <ol>\n    <li>Applicare lo scenario da cui si intende prelevare elementi</li>\n    <li>Per ogni elemento che si intende condividere, selezionarlo ed usare la funzione\n      <button mat-icon-button>\n        <mat-icon>add_shopping_cart</mat-icon>\n      </button>\n      per aggiungerlo all'elenco\n    </li>\n    <li>Tornare alla pagina degli scenari e selezionare adesso quello destinatario degli oggetti appena scelti</li>\n    <li>Attivare l'elenco degli oggetti selezionati con il pulsante\n      <button mat-icon-button color=\"warn\">\n        <mat-icon>shopping_cart</mat-icon>\n      </button>\n      che dovrebbe mostrare in alto a destra il numero di elementi presenti in elenco\n    </li>\n    <li>Nell'elenco apparso sulla sinistra selezionare tutti o parte degli oggetti presenti, quindi usare il pulsante\n      <button mat-icon-button>\n        <mat-icon>forward</mat-icon>\n      </button>\n      per aggiungerli allo scenario selezionato.\n    </li>\n  </ol>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/help/pages/scenario-help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScenarioHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScenarioHelpComponent = (function () {
    function ScenarioHelpComponent() {
        this.map = [{
                id: 'help-scenario',
                desc: 'Scenari'
            }, {
                id: 'help-scenario-actions',
                desc: 'Azioni possibili'
            }, {
                title: 'faqs'
            }, {
                id: 'help-scenario-apply',
                desc: 'Applicare uno scenario'
            }, {
                id: 'help-scenario-creation',
                desc: 'Creare un nuovo scenario'
            }, {
                id: 'help-scenario-delete',
                desc: 'Eliminare uno scenario'
            }, {
                id: 'help-scenario-share',
                desc: 'Condividere uno scenario'
            }, {
                id: 'help-scenario-share-objects',
                desc: 'Passare oggetti da uno scenario ad un altro'
            }];
    }
    ScenarioHelpComponent.prototype.ngOnInit = function () {
    };
    ScenarioHelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scenario-help',
            template: __webpack_require__("../../../../../src/app/pages/help/pages/scenario-help.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ScenarioHelpComponent);
    return ScenarioHelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/help/pages/slowquery-help.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"help-slow-query\">\n  <h1>Slow query manager</h1>\n  <p>La gestione delle query lente è affidata ad un tool sperimentale.</p>\n  <p>Avviare la procedura premendo il pulsante\n    <button mat-icon-button>\n      <mat-icon>play_circle_filled</mat-icon>\n    </button>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/help/pages/slowquery-help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlowqueryHelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlowqueryHelpComponent = (function () {
    function SlowqueryHelpComponent() {
        this.map = [{
                id: 'help-slow-query',
                desc: 'Starter'
            }];
    }
    SlowqueryHelpComponent.prototype.ngOnInit = function () {
    };
    SlowqueryHelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-slowquery-help',
            template: __webpack_require__("../../../../../src/app/pages/help/pages/slowquery-help.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SlowqueryHelpComponent);
    return SlowqueryHelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/log/log.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container log-page layout-fill\">\n  <app-page-header [options]=\"header\"></app-page-header>\n  <app-monitor></app-monitor>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/log/log.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogComponent = (function () {
    function LogComponent() {
        this.header = {};
        this.header = {
            title: function () { return 'Application Log'; },
        };
    }
    LogComponent.prototype.ngOnInit = function () {
    };
    LogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-log',
            template: __webpack_require__("../../../../../src/app/pages/log/log.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], LogComponent);
    return LogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/nocontent/nocontent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".no-content > h1 {\r\n  position: absolute;\r\n  text-align: center;\r\n  top: 30%;\r\n  width: 100%;\r\n  font-weight: 100;\r\n  opacity: .2;\r\n  font-variant: small-caps; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/nocontent/nocontent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-fill no-content\">\n  <h1>page not found :(</h1>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/nocontent/nocontent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_animations__ = __webpack_require__("../../../../../src/app/app.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    NoContentComponent.prototype.ngOnInit = function () {
    };
    NoContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nocontent',
            template: __webpack_require__("../../../../../src/app/pages/nocontent/nocontent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/nocontent/nocontent.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__app_animations__["a" /* fadeAnimation */]]
        }),
        __metadata("design:paramtypes", [])
    ], NoContentComponent);
    return NoContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/previews/previews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preview-image img {\r\n  max-width: 100%; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/previews/previews.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container layout-fill\">\n  <app-browser></app-browser>\n  <div class=\"page-editor preview-image echo-scrollbar\" flex>\n    <app-page-header [options]=\"header\"></app-page-header>\n    <app-new-element></app-new-element>\n    <div #preview></div>\n    <app-debug-pre></app-debug-pre>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/previews/previews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_browser_service__ = __webpack_require__("../../../../../src/app/services/browser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__ = __webpack_require__("../../../../../src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewsComponent = (function () {
    function PreviewsComponent(browser, interaction, renderer, cart) {
        var _this = this;
        this.browser = browser;
        this.interaction = interaction;
        this.renderer = renderer;
        this.cart = cart;
        this.header = {};
        var self = this;
        self.browser.register({
            type: 'previews',
            namePrp: '_id',
            onSelect: function (doc) {
                var img = renderer.createElement('img');
                renderer.setAttribute(img, 'src', doc.data);
                var cc = _this.preview.nativeElement.firstChild;
                if (cc) {
                    _this.preview.nativeElement.removeChild(cc);
                }
                renderer.appendChild(_this.preview.nativeElement, img);
            }
        });
        self.header = {
            title: function () { return (self.browser.currentInfo || {})._id; },
            buttons: [{
                    icon: 'delete_forever',
                    tooltip: 'Remove not used',
                    disabled: function () { return true; },
                    action: function () { return self.interaction.deleteNotUsedPreviews(); }
                }, {
                    icon: 'add_shopping_cart',
                    tooltip: 'Add to cart',
                    visible: function () { return !!self.browser.current; },
                    disabled: function () { return cart.contains(self.browser.current); },
                    action: function () { return cart.add(self.browser.current); }
                }, {
                    icon: 'delete',
                    tooltip: 'Remove preview',
                    color: 'warn',
                    disabled: function () { return !self.browser.current; },
                    action: function () { return self.browser.delete('Delete current preview?'); }
                }]
        };
    }
    PreviewsComponent.prototype.ngOnInit = function () {
    };
    PreviewsComponent.prototype.ngOnDestroy = function () {
        this.browser.deregister();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('preview'),
        __metadata("design:type", Object)
    ], PreviewsComponent.prototype, "preview", void 0);
    PreviewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-previews',
            template: __webpack_require__("../../../../../src/app/pages/previews/previews.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/previews/previews.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_browser_service__["a" /* BrowserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__["a" /* InteractionService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]])
    ], PreviewsComponent);
    return PreviewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/queries/queries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".schema {\r\n  font-family: monospace;\r\n  position: relative; }\r\n  .schema .index {\r\n    width: 40px;\r\n    opacity: .3;\r\n    font-size: .8em;\r\n    margin-left: -20px; }\r\n  .schema .name {\r\n    width: 30%; }\r\n  .schema .type,\r\n  .schema .length {\r\n    width: 10%; }\r\n  .schema .mat-list-item {\r\n    border-bottom: #555 1px solid; }\r\n\r\n.executed-code {\r\n  font-size: .9em;\r\n  opacity: .7;\r\n  color: gold; }\r\n\r\n.result-table {\r\n  width: 100%;\r\n  min-width: 848px;\r\n  height: auto;\r\n  overflow-x: auto; }\r\n  .result-table .table-container {\r\n    overflow: auto; }\r\n    .result-table .table-container table {\r\n      border-collapse: collapse;\r\n      width: 100%; }\r\n    .result-table .table-container td, .result-table .table-container th {\r\n      border: 1px solid rgba(200, 200, 200, 0.05);\r\n      text-align: left;\r\n      padding: 8px;\r\n      min-width: 120px;\r\n      max-width: 400px;\r\n      overflow: hidden;\r\n      white-space: pre-wrap;\r\n      text-overflow: ellipsis; }\r\n    .result-table .table-container tr:nth-child(even) {\r\n      background-color: rgba(1, 1, 1, 0.1); }\r\n  .result-table .table-navigator {\r\n    line-height: 40px;\r\n    height: 40px; }\r\n\r\n.query-editor > .error {\r\n  padding: 10px;\r\n  background-color: #7b000017; }\r\n.query-editor .play-button {\r\n  position: absolute;\r\n  right: 270px;\r\n  bottom: 5px;\r\n  opacity: .4;\r\n  z-index: 10; }\r\n  .query-editor .play-button:not([disabled]):hover {\r\n    opacity: 1; }\r\n.query-editor .query-editor-container {\r\n  position: relative; }\r\n  .query-editor .query-editor-container app-schema-browser,\r\n  .query-editor .query-editor-container app-fields-browser {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    border-left: #333 4px solid;\r\n    z-index: 10;\r\n    background-color: #242424; }\r\n.query-editor .query-editor-parameters {\r\n  width: 848px; }\r\n  .query-editor .query-editor-parameters * {\r\n    line-height: 40px; }\r\n  .query-editor .query-editor-parameters .query-parameter {\r\n    height: 40px;\r\n    position: relative;\r\n    padding: 0 110px 0 10px;\r\n    margin-bottom: 4px; }\r\n    .query-editor .query-editor-parameters .query-parameter .query-parameter-toolbar {\r\n      position: absolute;\r\n      right: 0;\r\n      top: 0;\r\n      height: 40px;\r\n      padding: 0 10px; }\r\n    .query-editor .query-editor-parameters .query-parameter .value {\r\n      opacity: .3; }\r\n    .query-editor .query-editor-parameters .query-parameter .type {\r\n      opacity: .3;\r\n      display: inline-block;\r\n      right: 130px;\r\n      position: absolute; }\r\n.query-editor .toolbar-editor-button .editor-button {\r\n  background-color: transparent;\r\n  box-shadow: none; }\r\n.query-editor .on-left {\r\n  float: left;\r\n  padding: 0 20px; }\r\n\r\n.prp .prp-name {\r\n  font-size: .8em;\r\n  opacity: .5;\r\n  font-variant: small-caps;\r\n  min-width: 200px;\r\n  display: inline-block; }\r\n.prp .prp-value {\r\n  color: gold; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/queries/queries.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container layout-fill\">\n  <app-browser></app-browser>\n  <div class=\"page-editor echo-scrollbar\" flex>\n    <app-page-header [options]=\"header\"></app-page-header>\n    <app-new-element *ngIf=\"ready\"></app-new-element>\n    <div class=\"page-cards query-editor\" *ngIf=\"browser.current\">\n      <!-- HEADER -->\n      <mat-card>\n        <mat-card-header>\n          <mat-card-title></mat-card-title>\n          <mat-slide-toggle class=\"top-right\" [(ngModel)]=\"browser.current.active\">Active</mat-slide-toggle>\n        </mat-card-header>\n        <mat-card-content>\n          <div layout-col>\n            <div layout-row>\n              <mat-form-field layout-70>\n                <input matInput [(ngModel)]=\"browser.current.name\" placeholder=\"Name\">\n              </mat-form-field>\n              <mat-form-field layout-30>\n                <mat-select placeholder=\"Connection\" [(ngModel)]=\"browser.current.connection\" (change)=\"checkConnection()\">\n                  <mat-option *ngFor=\"let c of connections\" [value]=\"c._id\">\n                    {{ c.name }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <mat-form-field>\n              <textarea matInput [(ngModel)]=\"browser.current.info\" rows=\"1\" matTextareaAutosize placeholder=\"Description\"></textarea>\n            </mat-form-field>\n          </div>\n        </mat-card-content>\n        <mat-card-actions layout-right>\n          <span *ngIf=\"dataEntryActive\" class=\"accent-color on-left\">Active for data-entry</span>\n          <ng-container *ngIf=\"schema.paramStars.length\">\n            <button mat-icon-button matTooltip=\"Add a star parameter\" [matMenuTriggerFor]=\"menu\">\n              <mat-icon>stars</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item *ngFor=\"let p of schema.paramStars\" (click)=\"insertStar(p)\">\n                <mat-icon>{{getParameterIcon(p)}}</mat-icon>\n                <span>{{p.name}}</span>\n              </button>\n              <mat-divider></mat-divider>\n              <button mat-menu-item (click)=\"clearStarParams()\">\n                <mat-icon>close</mat-icon>\n                <span>Delete list</span>\n              </button>\n            </mat-menu>\n          </ng-container>\n          <button mat-raised-button color=\"{{dataEntryActive?'accent':''}}\" (click)=\"toggleDataEntry()\">DATA ENTRY</button>\n          <button mat-raised-button color=\"accent\" (click)=\"newParameter()\">ADD PARAMETER</button>\n        </mat-card-actions>\n      </mat-card>\n      <!-- PARAMETERS -->\n      <span *ngIf=\"((browser.current||{}).parameters||[]).length\">Parameters</span>\n      <div class=\"query-editor-parameters\">\n        <div class=\"query-parameter mat-elevation-z4 dark-background\" *ngFor=\"let p of browser.current.parameters\" layout-row>\n          <mat-icon aria-label=\"parameter type\" [matTooltip]=\"p.type\">{{getParameterIcon(p)}}</mat-icon>\n          <span class=\"name\">{{p.name}}</span>\n          <span class=\"value\"> = {{p.value}}</span>\n          <span class=\"type\">{{p.dataType}}</span>\n          <div class=\"query-parameter-toolbar\">\n            <mat-icon class=\"as-button\" (click)=\"star(p)\" aria-label=\"command favorite\">{{isCloned(p) ? 'star' : 'star_border'}}</mat-icon>\n            <mat-icon class=\"as-button\" (click)=\"insert(p)\" aria-label=\"command insert\">play_for_work</mat-icon>\n            <mat-icon class=\"as-button\" (click)=\"edit(p)\" aria-label=\"command edit\">edit</mat-icon>\n            <mat-icon class=\"as-button\" (click)=\"remove(p)\" aria-label=\"command delete\" color=\"warn\">delete</mat-icon>\n          </div>\n        </div>\n      </div>\n      <!-- SQL EDITOR -->\n      <div class=\"toolbar-editor-button\">\n        <button mat-raised-button class=\"editor-button\" [ngClass]=\"{'active':browser.current._editor==='get'}\" (click)=\"setEditor()\">SQL</button>\n        <button mat-raised-button *ngIf=\"dataEntryActive\" class=\"editor-button\" [ngClass]=\"{'active':browser.current._editor==='add'}\" (click)=\"setEditor('add')\">ADD</button>\n        <button mat-raised-button *ngIf=\"dataEntryActive\" class=\"editor-button\" [ngClass]=\"{'active':browser.current._editor==='update'}\" (click)=\"setEditor('update')\">UPDATE</button>\n        <button mat-raised-button *ngIf=\"dataEntryActive\" class=\"editor-button\" [ngClass]=\"{'active':browser.current._editor==='delete'}\" (click)=\"setEditor('delete')\">DELETE</button>\n      </div>\n      <div class=\"mat-elevation-z4 dark-background query-editor-container\">\n        <div *ngIf=\"browser.current._editor==='get'\">\n          <codemirror #cmeditor [(ngModel)]=\"browser.current.query\" [config]=\"config\"></codemirror>\n          <app-schema-browser (insert)=\"onInsert($event)\"></app-schema-browser>\n        </div>\n        <div *ngIf=\"browser.current._editor==='add'\">\n          <codemirror #cmeditor_add [(ngModel)]=\"browser.current.dataentryOptions.add\" [config]=\"config\"></codemirror>\n          <app-fields-browser (insert)=\"onInsertField($event)\"></app-fields-browser>\n        </div>\n        <div *ngIf=\"browser.current._editor==='update'\">\n          <codemirror #cmeditor_upd [(ngModel)]=\"browser.current.dataentryOptions.update\" [config]=\"config\"></codemirror>\n          <app-fields-browser (insert)=\"onInsertField($event)\"></app-fields-browser>\n        </div>\n        <div *ngIf=\"browser.current._editor==='delete'\">\n          <codemirror #cmeditor_del [(ngModel)]=\"browser.current.dataentryOptions.delete\" [config]=\"config\"></codemirror>\n          <app-fields-browser (insert)=\"onInsertField($event)\"></app-fields-browser>\n        </div>\n        <button *ngIf=\"browser.current._editor==='get'\" class=\"play-button\" color=\"accent\" mat-icon-button\n                (click)=\"test()\" [disabled]=\"!(browser.current||{}).query\" matTooltip=\"run query\">\n          <mat-icon>play_circle_filled</mat-icon>\n        </button>\n        <button *ngIf=\"browser.current._editor!=='get'\" class=\"play-button\" color=\"accent\" mat-icon-button\n                (click)=\"generate()\" [disabled]=\"!(browser.current||{}).connection\" matTooltip=\"generate code\">\n          <mat-icon>flash_on</mat-icon>\n        </button>\n      </div>\n      <!-- ERRORS -->\n      <div *ngIf=\"error\" class=\"error\">{{error}}</div>\n      <!-- SCHEMA -->\n      <span>Schema ({{(browser.current.columns||[]).length}} columns)</span>\n      <mat-card>\n        <mat-card-content>\n          <mat-list class=\"schema\">\n            <mat-list-item *ngFor=\"let c of browser.current.columns; let i = index\">\n              <span class=\"index\">{{(i+1)}}</span>\n              <span class=\"name\">{{c.name}}</span>\n              <span class=\"type\">{{c.type}}</span>\n              <span class=\"length\">{{c.length}}</span>\n              <span class=\"attr\">\n                {{c.nullable?'nullable,':''}}\n                {{c.caseSensitive?'caseSensitive,':''}}\n                {{c.identity?'identity,':''}}\n                {{c.readOnly?'readOnly,':''}}\n              </span>\n            </mat-list-item>\n          </mat-list>\n        </mat-card-content>\n      </mat-card>\n      <!-- STAT -->\n      <span *ngIf=\"!!result\">Stat</span>\n      <mat-card *ngIf=\"!!result\">\n        <div class=\"prp\"><span class=\"prp-name\">Elapsed</span><span class=\"prp-value\">{{result.stat.elapsed}}</span></div>\n        <div class=\"prp\"><span class=\"prp-name\">Records Count</span><span class=\"prp-value\">{{result.stat.rowCount}}</span></div>\n        <div class=\"prp\"><span class=\"prp-name\">Columns Count</span><span class=\"prp-value\">{{result.stat.colCount}}</span></div>\n      </mat-card>\n      <!-- EXECUTED SQL -->\n      <span *ngIf=\"!!(result||{}).sql\">Executed SQL</span>\n      <mat-card *ngIf=\"!!(result||{}).sql\">\n        <button mat-icon-button class=\"top-right\" ngxClipboard [cbContent]=\"result.sql\" matTooltip=\"Copy to clipboard\">\n          <mat-icon aria-label=\"copy button\">content_copy</mat-icon>\n        </button>\n        <pre class=\"executed-code\">{{(result||{}).sql}}</pre>\n      </mat-card>\n      <!-- RESULTS -->\n      <span *ngIf=\"!!(result||{}).rows\">Results ({{((result||{}).rows||[]).length}} records)</span>\n      <div *ngIf=\"(result||{}).rows\" class=\"result-table page-editor-card mat-elevation-z4\">\n        <div class=\"table-container echo-scrollbar\">\n          <table>\n            <tbody>\n            <tr><th *ngFor=\"let c of browser.current.columns\">{{c.name}}</th></tr>\n            <tr *ngFor=\"let r of result.view.rows\">\n              <td *ngFor=\"let c of browser.current.columns\">{{r[c.name]}}</td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"table-navigator\" layout-row layout-right>\n          <button mat-icon-button matTooltip=\"prev page\" (click)=\"navigate(true)\" [disabled]=\"!result.view.prevEnabled\">\n            <mat-icon aria-label=\"left button\">navigate_before</mat-icon>\n          </button>\n          <div class=\"table-navigator-state\">{{result.view.state}}</div>\n          <button mat-icon-button matTooltip=\"next page\" (click)=\"navigate()\" [disabled]=\"!result.view.nextEnabled\">\n            <mat-icon aria-label=\"right button\">navigate_next</mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n    <app-debug-pre></app-debug-pre>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/queries/queries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_browser_service__ = __webpack_require__("../../../../../src/app/services/browser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__ = __webpack_require__("../../../../../src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_schema_cache_service__ = __webpack_require__("../../../../../src/app/services/schema-cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_codemirror_mode_sql_sql__ = __webpack_require__("../../../../codemirror/mode/sql/sql.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_codemirror_mode_sql_sql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_codemirror_mode_sql_sql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EDITOR_TYPES = {
    get: 'get',
    add: 'add',
    update: 'update',
    'delete': 'delete'
};
var QueriesComponent = (function () {
    function QueriesComponent(browser, interaction, u, schema, cart, dialogs) {
        var _this = this;
        this.browser = browser;
        this.interaction = interaction;
        this.u = u;
        this.schema = schema;
        this.cart = cart;
        this.dialogs = dialogs;
        this.ready = false;
        this.config = {};
        this.idle = false;
        this.header = {};
        this.connections = [];
        this.error = null;
        this.result = null;
        this.result_str = '';
        this.editor = null;
        this.dataEntryActive = false;
        var self = this;
        self.config = {
            lineNumbers: true,
            mode: 'javascript',
            theme: 'blackboard'
        };
        self.browser.register({
            type: self.interaction.types.queries,
            onSelect: function () {
                self.error = null;
                self.idle = false;
                self.result_str = '';
                self.result = null;
                self.browser.current._tablename = null;
                self.browser.current._editor = EDITOR_TYPES.get;
                self.browser.current.dataentryOptions = self.browser.current.dataentryOptions || {};
                __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.keys(EDITOR_TYPES).forEach(function (k) { return self.browser.current.dataentryOptions[k] = self.browser.current.dataentryOptions[k] || ''; });
                self.dataEntryActive = !!__WEBPACK_IMPORTED_MODULE_8_lodash___default.a.find(__WEBPACK_IMPORTED_MODULE_8_lodash___default.a.keys(EDITOR_TYPES), function (k) { return !!_this.browser.current.dataentryOptions[k]; });
                self.checkConnection();
            },
            onLoaded: function (docs) {
                self.connections = __WEBPACK_IMPORTED_MODULE_8_lodash___default()(docs)
                    .filter(function (d) { return d._type === self.interaction.types.connections; })
                    .value();
                self.checkConnection();
            },
            template: {
                name: 'New Query',
                info: '',
                connection: '',
                query: '',
                columns: [],
                parameters: [],
                active: true
            }
        });
        self.header = {
            title: function () { return (self.browser.currentInfo || {}).name; },
            isNew: function () { return (self.browser.current || {})._new; },
            buttons: [{
                    icon: 'add_circle_outline',
                    tooltip: 'Add a new query',
                    visible: function () { return !!self.browser.current; },
                    action: function () { return self.browser.newElement(); }
                }, {
                    icon: 'flash_on',
                    tooltip: 'Exec query',
                    visible: function () { return !!self.browser.current; },
                    action: function () { return self.test(); }
                }, {
                    icon: 'save',
                    tooltip: 'Save modifies',
                    visible: function () { return !!self.browser.current; },
                    action: function () { return self.browser.save('Query successfully updated!'); }
                }, {
                    icon: 'add_shopping_cart',
                    tooltip: 'Add to cart',
                    visible: function () { return !!self.browser.current; },
                    disabled: function () { return cart.contains(self.browser.current); },
                    action: function () { return cart.add(self.browser.current); }
                }, {
                    icon: 'delete',
                    tooltip: 'Remove query',
                    color: 'warn',
                    visible: function () { return !!self.browser.current; },
                    action: function () { return self.browser.delete('Delete current query?'); }
                }]
        };
    }
    QueriesComponent_1 = QueriesComponent;
    QueriesComponent._getParameterIcon = function (p) {
        switch ((p || {}).type) {
            case 'lookup': return 'group_work';
            case 'list': return 'format_list_bulleted';
            case 'system': return 'settings';
            default: return 'radio_button_checked';
        }
    };
    QueriesComponent.prototype.test = function () {
        var self = this;
        if (self.idle) {
            return;
        }
        self.idle = true;
        self.error = null;
        self.result_str = '';
        self.result = null;
        self.u.idle = true;
        var st = (new Date()).getTime();
        self.interaction.getResult(self.browser.current, function (err, data) {
            var et = (new Date()).getTime();
            if (err) {
                self.error = self.u.getErrorMessage(err);
            }
            data = data || {};
            self.result_str = JSON.stringify(data, null, 2);
            self.result = data;
            self.result.stat = {
                elapsed: (et - st) + 'ms',
                rowCount: (data.rows || []).length,
                colCount: (data.columns || []).length
            };
            self.result.view = {
                rows: (data.rows || []).slice(0, 10),
                page: 0,
                pages: Math.floor((data.rows || []).length / 10) + 1,
                pageRows: 10
            };
            self.checkNavigator();
            self.browser.current.columns = data.columns || [];
            self.idle = false;
            self.u.idle = false;
            if (!err) {
                self.u.snack('Query executed: ' + self.result.stat.rowCount + ' records in ' + self.result.stat.elapsed);
            }
        });
    };
    QueriesComponent.prototype.checkConnection = function () {
        this.schema.connection((this.browser.current || {}).connection);
    };
    QueriesComponent.prototype.checkNavigator = function () {
        var pg = this.result.view.page;
        this.result.view.nextEnabled = (pg < this.result.view.pages - 1);
        this.result.view.prevEnabled = (pg > 0);
        this.result.view.state = (pg + 1) + ' of ' + this.result.view.pages;
    };
    QueriesComponent.prototype.navigate = function (prev) {
        this.checkNavigator();
        this.result.view.page = prev ?
            (this.result.view.prevEnabled ? this.result.view.page - 1 : this.result.view.page) :
            (this.result.view.nextEnabled ? this.result.view.page + 1 : this.result.view.page);
        var pos = this.result.view.page * this.result.view.pageRows;
        this.result.view.rows = (this.result.rows || []).slice(pos, pos + this.result.view.pageRows);
        this.checkNavigator();
    };
    QueriesComponent.prototype.replaceSelection = function (sql, editor) {
        editor = editor || this.cmeditor;
        if (!editor) {
            return;
        }
        var doc = editor.instance.getDoc();
        doc.replaceSelection(sql);
    };
    QueriesComponent.prototype.onInsert = function (page) {
        if (!page) {
            return;
        }
        var empty = (this.browser.current.query || '').trim() === '';
        var sqlname = this.schema.helper.getElementName(page);
        if (empty && (page.original.TABLE_TYPE || page.original.TABLE_LOCK)) {
            this.browser.current.query = this.schema.helper.generateSelect(page);
        }
        else if (empty && page.original.ROUTINE_TYPE === 'PROCEDURE') {
            this.browser.current.query = this.schema.helper.generateStored(page);
        }
        else if (empty && page.original.ROUTINE_TYPE) {
            this.browser.current.query = this.schema.helper.generateFunction(page);
        }
        else {
            this.replaceSelection(sqlname);
        }
        this.cmeditor.instance.focus();
    };
    QueriesComponent.prototype.currentEditor = function () {
        return (this.browser.current._editor === EDITOR_TYPES.add) ? this.cmeditor_add :
            ((this.browser.current._editor === EDITOR_TYPES.update) ? this.cmeditor_upd :
                ((this.browser.current._editor === EDITOR_TYPES.delete) ? this.cmeditor_del : null));
    };
    QueriesComponent.prototype.onInsertField = function (field) {
        var f = { name: field };
        var sql = this.schema.helper.getParameterSql(f);
        var editor = this.currentEditor();
        if (!editor) {
            return console.error('No codemirror editor available!');
        }
        this.replaceSelection(sql, editor);
        editor.instance.focus();
    };
    QueriesComponent.prototype.getParameterIcon = function (p) {
        return QueriesComponent_1._getParameterIcon(p);
    };
    QueriesComponent.prototype.newParameter = function () {
        var name = this.u.getNewName(this.browser.current.parameters, 'New Parameter');
        var np = this.u.getNewParameter(name);
        this.browser.current.parameters.push(np);
    };
    QueriesComponent.prototype.isCloned = function (p) {
        return !!__WEBPACK_IMPORTED_MODULE_8_lodash___default.a.find(this.schema.paramStars, function (cp) {
            return cp.name === p.name && cp.type === p.type;
        });
    };
    QueriesComponent.prototype.star = function (p) {
        this.schema.star(p);
    };
    QueriesComponent.prototype.clearStarParams = function () {
        this.schema.starClear();
    };
    QueriesComponent.prototype.insert = function (p) {
        var sql = this.schema.helper.getParameterSql(p);
        var template = p.isOptional ? '{{IF ' + p.name + '}}\r\t' + sql + '\r{{ENDIF}}' : sql;
        this.replaceSelection(template);
    };
    QueriesComponent.prototype.insertStar = function (p) {
        var cp = __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.clone(p);
        cp.id = this.u.guid();
        this.browser.current.parameters.push(cp);
    };
    QueriesComponent.prototype.edit = function (p) {
        this.dialogs.editParameter(p);
    };
    QueriesComponent.prototype.remove = function (p) {
        __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.pull(this.browser.current.parameters, p);
    };
    QueriesComponent.prototype.setEditor = function (type) {
        this.browser.current._editor = type || EDITOR_TYPES.get;
    };
    QueriesComponent.prototype.toggleDataEntry = function () {
        var _this = this;
        var self = this;
        if (this.dataEntryActive) {
            self.u.confirm({
                message: 'All data-entry scripts will be deleted, do you want to continue?',
                ok: 'Yes',
                cancel: 'No'
            }, function (data) {
                if (data.resp === 'ok') {
                    _this.dataEntryActive = false;
                    _this.browser.current._editor = EDITOR_TYPES.get;
                    __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.keys(EDITOR_TYPES).forEach(function (k) { return _this.browser.current.dataentryOptions[k] = ''; });
                }
            });
        }
        else {
            this.dataEntryActive = true;
        }
    };
    QueriesComponent.prototype.generate = function () {
        var self = this;
        var current = self.browser.current.dataentryOptions[self.browser.current._editor];
        self.u.confirm({
            message: (current ? 'Current script will be overwritten!\n' : '') + 'Specify a table name (optional)',
            ok: 'Ok',
            cancel: 'Cancel',
            withValue: true,
            placeholder: 'undefined',
            value: self.browser.current._tablename || ''
        }, function (data) {
            if (data.resp === 'ok') {
                self.browser.current._tablename = data.value || '';
                self.interaction.templatize({
                    action: (self.browser.current || {})._editor,
                    columns: (self.browser.current || {}).columns,
                    connection: (self.browser.current || {}).connection,
                    tablename: data.value
                }, function (err, r) {
                    if ((r || {}).template) {
                        self.browser.current.dataentryOptions[self.browser.current._editor] = r.template;
                    }
                });
            }
        });
    };
    QueriesComponent.prototype.ngOnInit = function () {
        this.ready = true;
    };
    QueriesComponent.prototype.ngOnDestroy = function () {
        this.browser.deregister();
        this.schema.connection();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cmeditor'),
        __metadata("design:type", Object)
    ], QueriesComponent.prototype, "cmeditor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cmeditor_add'),
        __metadata("design:type", Object)
    ], QueriesComponent.prototype, "cmeditor_add", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cmeditor_upd'),
        __metadata("design:type", Object)
    ], QueriesComponent.prototype, "cmeditor_upd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cmeditor_del'),
        __metadata("design:type", Object)
    ], QueriesComponent.prototype, "cmeditor_del", void 0);
    QueriesComponent = QueriesComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-queries',
            template: __webpack_require__("../../../../../src/app/pages/queries/queries.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/queries/queries.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_browser_service__["a" /* BrowserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__["a" /* InteractionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_schema_cache_service__["a" /* SchemaCacheService */],
            __WEBPACK_IMPORTED_MODULE_5__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_6__services_dialogs_service__["a" /* DialogsService */]])
    ], QueriesComponent);
    return QueriesComponent;
    var QueriesComponent_1;
}());

/**
   "columns": [
     {
       "name": "LastName",
       "type": "nvarchar",
       "_id": "567ef48d0a94b52c1a93f989"
     },

   "parameters": [
     {
       "id": "9ab4e024-7343-8e45-53b5-a962aba9a2ec",
       "name": "First name param",
       "description": "",
       "defaultValue": "",
       "value": null,
       "_id": "58272ac4b945b6c8303eed93",
       "isHidden": false,
       "isMultiSelect": false,
       "isReadOnly": false,
       "isOptional": false,
       "lookup": {
         "id": "",
         "fieldValue": "",
         "fieldKey": ""
       },
       "lookupItems": [],
       "type": "normal",
       "systemType": "",
       "dataType": "string"
     }
 */


/***/ }),

/***/ "../../../../../src/app/pages/scenario/scenario.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scenario-item .mat-chip {\r\n  max-width: 300px;\r\n  font-variant: small-caps; }\r\n.scenario-item .count {\r\n  float: right; }\r\n\r\n.scenario-editor {\r\n  max-width: 500px;\r\n  margin-bottom: 40px; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/scenario/scenario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container layout-fill\">\n  <input class=\"hidden\" type=\"file\" #upload (change)=\"onFileChange($event)\">\n  <div class=\"scenario-toolbox toolbox float-left echo-scrollbar\">\n    <mat-nav-list>\n      <mat-list-item *ngFor=\"let s of scenarios\" (click)=\"select(s)\" [ngClass]=\"{'accent':s._current, 'selected':s===current}\">\n        <mat-icon *ngIf=\"s._current\" aria-label=\"current scenario\" color=\"warn\">star</mat-icon>\n        <mat-icon *ngIf=\"!s.folder\" aria-label=\"new scenario\" color=\"warn\">new_releases</mat-icon>\n        {{s.name}}\n        <mat-icon *ngIf=\"s.auth\" aria-label=\"auth scenario\" class=\"on-right\">security</mat-icon>\n      </mat-list-item>\n    </mat-nav-list>\n  </div>\n  <div class=\"page-editor echo-scrollbar\" flex>\n    <app-page-header [options]=\"header\"></app-page-header>\n    <div class=\"page-cards scenario-editor\" *ngIf=\"current && (current._current || !current.folder)\">\n      <mat-card>\n        <div layout-col>\n          <div layout-row>\n            <mat-form-field layout-70>\n              <input matInput [(ngModel)]=\"current.name\" placeholder=\"Name\">\n            </mat-form-field>\n            <mat-form-field layout-30>\n              <input matInput [(ngModel)]=\"current.folder\" placeholder=\"Folder\" disabled>\n            </mat-form-field>\n          </div>\n          <mat-slide-toggle [(ngModel)]=\"current.auth\" disabled>Auth</mat-slide-toggle>\n        </div>\n      </mat-card>\n    </div>\n    <mat-chip-list *ngIf=\"current\" class=\"mat-chip-list-stacked scenario-item\">\n      <mat-chip *ngFor=\"let i of items\" selected=\"true\" [color]=\"current._current ? 'warn' : 'accent'\">\n        {{i.name}}<span class=\"count\">{{i.count}}</span>\n      </mat-chip>\n    </mat-chip-list>\n    <div class=\"page-cards scenario-editor\" *ngIf=\"(current||{})._current\">\n      <span>Scenario Custom Options</span>\n      <mat-card>\n        <textarea class=\"echo-scrollbar text-editor code-color\" [(ngModel)]=\"currentSettings\" (blur)=\"updateSettings()\" placeholder=\"json options...\" matTextareaAutosize layout-fill></textarea>\n      </mat-card>\n    </div>\n    <div *ngIf=\"current && !current.folder\" class=\"grey-text\">Set as current to save it</div>\n    <pre *ngIf=\"user.settings.debug\" class=\"debug-pre\">{{current_str||''}}</pre>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/scenario/scenario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScenarioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_animations__ = __webpack_require__("../../../../../src/app/app.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__ = __webpack_require__("../../../../../src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_settings_service__ = __webpack_require__("../../../../../src/app/services/user-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ScenarioComponent = (function () {
    function ScenarioComponent(interaction, app, u, user, cartS) {
        var _this = this;
        this.interaction = interaction;
        this.app = app;
        this.u = u;
        this.user = user;
        this.cartS = cartS;
        this.uploading = false;
        this.header = {};
        this.scenarios = null;
        this.current = null;
        this.current_str = '';
        this.items = [];
        this.currentSettings = '';
        var self = this;
        self.header = {
            title: function () { return (self.current || {}).name; },
            buttons: [{
                    icon: 'star',
                    tooltip: 'Set as the current scenario',
                    color: 'warn',
                    visible: function () { return !!self.current && !(self.current || {})._current; },
                    action: function (e) { return self.apply(self.current); }
                }, {
                    icon: 'save',
                    tooltip: 'save changes',
                    visible: function () { return !!self.current && (self.current || {})._current; },
                    action: function (e) { return self.update(self.current); }
                }, {
                    icon: 'refresh',
                    tooltip: 'refresh',
                    disabled: function () { return self.uploading; },
                    action: function (e) { return self.refresh(); }
                }, {
                    icon: 'add_circle_outline',
                    tooltip: 'Create new scenario',
                    action: function () {
                        var scenario = {
                            name: _this.u.getNewName(_this.scenarios, 'New Scenario'),
                            errors: [],
                            auth: false
                        };
                        _this.scenarios.push(scenario);
                        _this.select(scenario);
                    }
                }, {
                    divider: true
                }, {
                    icon: 'cloud_upload',
                    tooltip: 'upload scenario',
                    visible: function () { return !!self.current; },
                    disabled: function () { return self.uploading; },
                    action: function (e) { return self.uploadInput.nativeElement.click(); }
                }, {
                    icon: 'file_download',
                    tooltip: 'download scenario',
                    visible: function () { return !!self.current; },
                    action: function (e) { return self.interaction.download(self.current.folder); }
                }]
        };
        self.interaction.events.subscribe(function (e) {
            if (e.type === 'push') {
                self.refresh();
            }
        });
    }
    ScenarioComponent.prototype._reset = function () {
        var self = this;
        self.current = null;
        self.currentSettings = '';
    };
    ScenarioComponent.prototype.refresh = function () {
        var self = this;
        self.interaction.getScenarios().subscribe(function (data) {
            self.scenarios = data;
            var cur = self.current ?
                __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.find(data, function (s) { return s.folder === self.current.folder; }) :
                __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.find(data, function (s) { return s._current; });
            self.select(cur);
        }, function (err) {
            self.u.error(err);
        });
    };
    ScenarioComponent.prototype.apply = function (scenario) {
        var self = this;
        self._reset();
        self.app.apply(scenario, function () {
            self.refresh();
            self.u.snack('Scenario successfully changed!');
        });
    };
    ScenarioComponent.prototype.update = function (scenario) {
        var self = this;
        self._reset();
        self.app.update(scenario, function () {
            self.refresh();
            self.u.snack('Scenario successfully updated!');
        });
    };
    ScenarioComponent.prototype.select = function (scenario) {
        var _this = this;
        this.current = scenario;
        this.currentSettings = JSON.stringify((scenario || {}).settings || {}, null, 2);
        this.cartS.scenario = scenario;
        this.current_str = JSON.stringify(scenario, null, 2);
        this.items = [];
        __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.keys(this.current || {}).forEach(function (pn) {
            if (__WEBPACK_IMPORTED_MODULE_7_lodash___default.a.isArray(_this.current[pn]) && _this.current[pn].length) {
                _this.items.push({ name: pn, count: _this.current[pn].length });
            }
        });
    };
    ScenarioComponent.prototype.updateSettings = function () {
        try {
            this.current.settings = JSON.parse(this.currentSettings);
            this.currentSettings = JSON.stringify(this.current.settings, null, 2);
        }
        catch (err) {
            console.error(err);
        }
    };
    ScenarioComponent.prototype.clearFile = function () {
        this.uploadInput.nativeElement.value = '';
        this.uploading = false;
    };
    ScenarioComponent.prototype.onFileChange = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.target.files && e.target.files.length > 0) {
            var self_1 = this;
            var file = e.target.files[0];
            if (!/(.*).zip/i.test(file.name)) {
                self_1.clearFile();
                self_1.u.error('Scenario must be a zip file!');
            }
            else {
                self_1.uploading = true;
                var data = new FormData();
                data.append('file', file);
                self_1.interaction.upload(data, function () {
                    self_1.clearFile();
                    self_1.refresh();
                });
            }
        }
    };
    ScenarioComponent.prototype.ngOnInit = function () {
        this.cartS.scenario = null;
        this.refresh();
    };
    ScenarioComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('upload'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ScenarioComponent.prototype, "uploadInput", void 0);
    ScenarioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scenario',
            template: __webpack_require__("../../../../../src/app/pages/scenario/scenario.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/scenario/scenario.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__app_animations__["a" /* fadeAnimation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_interaction_service__["a" /* InteractionService */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__services_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_settings_service__["a" /* UserSettingsService */],
            __WEBPACK_IMPORTED_MODULE_6__services_cart_service__["a" /* CartService */]])
    ], ScenarioComponent);
    return ScenarioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-settings {\r\n  /*padding-top: 50px;*/ }\r\n  .app-settings > .mat-card {\r\n    width: 600px;\r\n    margin: 50px auto; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-settings page-cards\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>SETTINGS</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <div layout-col>\n        <mat-form-field>\n          <input matInput [(ngModel)]=\"user.settings.host\" placeholder=\"Server host\">\n        </mat-form-field>\n        <mat-slide-toggle [(ngModel)]=\"user.settings.debug\">Debug mode</mat-slide-toggle>\n      </div>\n      <div layout-col>\n        <mat-slide-toggle (ngModel)=\"app.info.logServer\" disabled>Server log</mat-slide-toggle>\n        <div><span>Mode:</span> {{app.info.mode}}</div>\n        <div><span>Store:</span> {{app.info.store}}</div>\n      </div>\n    </mat-card-content>\n    <mat-card-actions layout-right>\n      <button mat-button (click)=\"update()\">SAVE</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_settings_service__ = __webpack_require__("../../../../../src/app/services/user-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = (function () {
    function SettingsComponent(user, app) {
        this.user = user;
        this.app = app;
    }
    SettingsComponent.prototype.update = function () {
        this.user.update();
        this.app.goBack();
    };
    SettingsComponent.prototype.ngOnInit = function () {
        // const u = this.user;
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/pages/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_settings_service__["a" /* UserSettingsService */],
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/slow-query/slow-query.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".starter {\r\n  height: 60%; }\r\n  .starter .mat-icon-button {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: auto; }\r\n    .starter .mat-icon-button .mat-icon {\r\n      width: 100px;\r\n      height: 100px;\r\n      font-size: 80px;\r\n      line-height: 100px; }\r\n\r\n.invaders-container.running {\r\n  background-color: black; }\r\n.invaders-container .invaders {\r\n  padding-left: calc(50% - 400px);\r\n  padding-top: 50px; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/slow-query/slow-query.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container invaders-container layout-fill\" [ngClass]=\"{'running':running}\">\n  <div class=\"starter\" *ngIf=\"!running\" layout-row>\n    <button mat-icon-button (click)=\"run()\" matTooltip=\"Run slow query manager\">\n      <mat-icon>play_circle_filled</mat-icon>\n    </button>\n  </div>\n  <div class=\"invaders\" #invaders></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/slow-query/slow-query.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlowQueryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlowQueryComponent = (function () {
    function SlowQueryComponent() {
        this.game = null;
        this.running = false;
        this.player = null;
        this.aliens = null;
        this.bullets = null;
        this.bulletTime = 0;
        this.cursors = null;
        this.fireButton = null;
        this.explosions = null;
        this.starfield = null;
        this.score = 0;
        this.scoreString = '';
        this.scoreText = null;
        this.lives = null;
        this.enemyBullet = null;
        this.firingTimer = 0;
        this.stateText = null;
        this.livingEnemies = [];
        this.enemyBullets = null;
    }
    SlowQueryComponent.prototype.preload = function () {
        this.game.load.image('bullet', 'assets/invaders/bullet.png');
        this.game.load.image('enemyBullet', 'assets/invaders/enemy-bullet.png');
        this.game.load.spritesheet('invader', 'assets/invaders/invader32x32x4.png', 32, 32);
        this.game.load.image('ship', 'assets/invaders/Mastiff-rgb.png');
        this.game.load.spritesheet('kaboom', 'assets/invaders/explode.png', 128, 128);
        this.game.load.image('starfield', 'assets/invaders/starfield.png');
        this.game.load.image('background', 'assets/invaders/background2.png');
    };
    SlowQueryComponent.prototype.setupInvader = function (invader) {
        invader.anchor.x = 0.5;
        invader.anchor.y = 0.5;
        invader.animations.add('kaboom');
    };
    SlowQueryComponent.prototype.descend = function () {
        this.aliens.y += 10;
    };
    SlowQueryComponent.prototype.createAliens = function () {
        for (var y = 0; y < 4; y++) {
            for (var x = 0; x < 10; x++) {
                var alien = this.aliens.create(x * 48, y * 50, 'invader');
                alien.anchor.setTo(0.5, 0.5);
                alien.animations.add('fly', [0, 1, 2, 3], 20, true);
                alien.play('fly');
                alien.body.moves = false;
            }
        }
        this.aliens.x = 100;
        this.aliens.y = 50;
        // All this does is basically start the invaders moving. Notice we're moving the Group they belong to,
        // rather than the invaders directly.
        var tween = this.game.add.tween(this.aliens).to({ x: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        //  When the tween loops it calls descend
        tween.onLoop.add(this.descend, this);
    };
    SlowQueryComponent.prototype.create = function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        //  The scrolling starfield background
        this.starfield = this.game.add.tileSprite(0, 0, 800, 600, 'starfield');
        //  Our bullet group
        this.bullets = this.game.add.group();
        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.bullets.createMultiple(30, 'bullet');
        this.bullets.setAll('anchor.x', 0.5);
        this.bullets.setAll('anchor.y', 1);
        this.bullets.setAll('outOfBoundsKill', true);
        this.bullets.setAll('checkWorldBounds', true);
        // The enemy's bullets
        this.enemyBullets = this.game.add.group();
        this.enemyBullets.enableBody = true;
        this.enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.enemyBullets.createMultiple(30, 'enemyBullet');
        this.enemyBullets.setAll('anchor.x', 0.5);
        this.enemyBullets.setAll('anchor.y', 1);
        this.enemyBullets.setAll('outOfBoundsKill', true);
        this.enemyBullets.setAll('checkWorldBounds', true);
        //  The hero!
        this.player = this.game.add.sprite(400, 500, 'ship');
        this.player.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
        //  The baddies!
        this.aliens = this.game.add.group();
        this.aliens.enableBody = true;
        this.aliens.physicsBodyType = Phaser.Physics.ARCADE;
        this.createAliens();
        //  The score
        this.scoreString = 'Score : ';
        this.scoreText = this.game.add.text(10, 10, this.scoreString + this.score, { font: '34px Arial', fill: '#fff' });
        //  Lives
        this.lives = this.game.add.group();
        this.game.add.text(this.game.world.width - 100, 10, 'Lives : ', { font: '34px Arial', fill: '#fff' });
        //  Text
        this.stateText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, ' ', { font: '84px Arial', fill: '#fff' });
        this.stateText.anchor.setTo(0.5, 0.5);
        this.stateText.visible = false;
        for (var i = 0; i < 3; i++) {
            var ship = this.lives.create(this.game.world.width - 100 + (30 * i), 60, 'ship');
            ship.anchor.setTo(0.5, 0.5);
            ship.angle = 0;
            ship.alpha = 0.6;
        }
        //  An explosion pool
        this.explosions = this.game.add.group();
        this.explosions.createMultiple(30, 'kaboom');
        this.explosions.forEach(this.setupInvader, this);
        //  And some controls to play the game with
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    };
    SlowQueryComponent.prototype.restart = function () {
        //  A new level starts
        // resets the life count
        this.lives.callAll('revive');
        //  And brings the aliens back from the dead :)
        this.aliens.removeAll();
        this.createAliens();
        // revives the player
        this.player.revive();
        // hides the text
        this.stateText.visible = false;
    };
    SlowQueryComponent.prototype.collisionHandler = function (bullet, alien) {
        var _this = this;
        //  When a bullet hits an alien we kill them both
        bullet.kill();
        alien.kill();
        //  Increase the score
        this.score += 20;
        this.scoreText.text = this.scoreString + this.score;
        //  And create an explosion :)
        var explosion = this.explosions.getFirstExists(false);
        explosion.reset(alien.body.x, alien.body.y);
        explosion.play('kaboom', 30, false, true);
        if (this.aliens.countLiving() === 0) {
            this.score += 1000;
            this.scoreText.text = this.scoreString + this.score;
            this.enemyBullets.callAll('kill', this);
            this.stateText.text = ' You Won, \n Click to restart';
            this.stateText.visible = true;
            // the "click to restart" handler
            this.game.input.onTap.addOnce(function () { return _this.restart(); }, this);
        }
    };
    SlowQueryComponent.prototype.enemyHitsPlayer = function (player, bullet) {
        var _this = this;
        bullet.kill();
        var live = this.lives.getFirstAlive();
        if (live) {
            live.kill();
        }
        //  And create an explosion :)
        var explosion = this.explosions.getFirstExists(false);
        explosion.reset(player.body.x, player.body.y);
        explosion.play('kaboom', 30, false, true);
        // When the player dies
        if (this.lives.countLiving() < 1) {
            player.kill();
            this.enemyBullets.callAll('kill');
            this.stateText.text = ' GAME OVER \n Click to restart';
            this.stateText.visible = true;
            // the "click to restart" handler
            this.game.input.onTap.addOnce(function () { return _this.restart(); }, this);
        }
    };
    SlowQueryComponent.prototype.enemyFires = function () {
        //  Grab the first bullet we can from the pool
        this.enemyBullet = this.enemyBullets.getFirstExists(false);
        this.livingEnemies.length = 0;
        var self = this;
        this.aliens.forEachAlive(function (alien) { return self.livingEnemies.push(alien); });
        if (this.enemyBullet && this.livingEnemies.length > 0) {
            var random = this.game.rnd.integerInRange(0, this.livingEnemies.length - 1);
            // randomly select one of them
            var shooter = this.livingEnemies[random];
            // And fire the bullet from this enemy
            this.enemyBullet.reset(shooter.body.x, shooter.body.y);
            this.game.physics.arcade.moveToObject(this.enemyBullet, this.player, 120);
            this.firingTimer = this.game.time.now + 2000;
        }
    };
    SlowQueryComponent.prototype.fireBullet = function () {
        //  To avoid them being allowed to fire too fast we set a time limit
        if (this.game.time.now > this.bulletTime) {
            //  Grab the first bullet we can from the pool
            var bullet = this.bullets.getFirstExists(false);
            if (bullet) {
                //  And fire it
                bullet.reset(this.player.x, this.player.y + 8);
                bullet.body.velocity.y = -400;
                this.bulletTime = this.game.time.now + 200;
            }
        }
    };
    SlowQueryComponent.prototype.update = function () {
        var _this = this;
        //  Scroll the background
        this.starfield.tilePosition.y += 2;
        if (this.player.alive) {
            //  Reset the player, then check for movement keys
            this.player.body.velocity.setTo(0, 0);
            if (this.cursors.left.isDown) {
                this.player.body.velocity.x = -200;
            }
            else if (this.cursors.right.isDown) {
                this.player.body.velocity.x = 200;
            }
            //  Firing?
            if (this.fireButton.isDown) {
                this.fireBullet();
            }
            if (this.game.time.now > this.firingTimer) {
                this.enemyFires();
            }
            //  Run collision
            this.game.physics.arcade.overlap(this.bullets, this.aliens, function (b, a) { return _this.collisionHandler(b, a); }, null, this);
            this.game.physics.arcade.overlap(this.enemyBullets, this.player, function (p, b) { return _this.enemyHitsPlayer(p, b); }, null, this);
        }
    };
    SlowQueryComponent.prototype.render = function () { };
    SlowQueryComponent.prototype.run = function () {
        var self = this;
        self.running = true;
        self.game = new Phaser.Game(800, 600, Phaser.AUTO, self.invaders.nativeElement, {
            preload: function () { return self.preload(); },
            create: function () { return self.create(); },
            update: function () { return self.update(); },
            render: function () { return self.render(); }
        });
    };
    SlowQueryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('invaders'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SlowQueryComponent.prototype, "invaders", void 0);
    SlowQueryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-slow-query',
            template: __webpack_require__("../../../../../src/app/pages/slow-query/slow-query.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/slow-query/slow-query.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SlowQueryComponent);
    return SlowQueryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/app-pages.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPagesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppPagesService = (function () {
    function AppPagesService() {
        this.pages = [
            {
                caption: 'Scenarios',
                type: 'scenario',
                icon: 'work',
                'default': true,
                left: true,
                help: true,
                helpDefault: true
            },
            {
                caption: 'Documents',
                type: 'documents',
                path: '/*',
                icon: 'label',
                left: true,
                help: true
            },
            {
                caption: 'Connections',
                type: 'connections',
                path: '/*',
                icon: 'settings_input_component',
                left: true,
                help: true
            },
            {
                caption: 'Queries',
                type: 'queries',
                path: '/*',
                icon: 'file_download',
                left: true,
                help: true
            },
            {
                tooltip: 'data-entry',
                type: 'dataentry',
                path: '/*',
                icon: 'label',
                hidden: true
            },
            {
                tooltip: 'walking-data',
                type: 'walkingdata',
                path: '/*',
                icon: 'swap_vertical_circle',
                hidden: true
            },
            {
                tooltip: 'previews',
                type: 'previews',
                path: '/*',
                icon: 'image',
                help: true
            },
            {
                tooltip: 'rules',
                type: 'rules',
                path: '/*',
                icon: 'lock',
                hidden: true
            },
            {
                divider: true
            },
            {
                tooltip: 'slow queries',
                type: 'slowquery',
                icon: 'hourglass_full',
                help: true
            },
            {
                tooltip: 'log',
                type: 'log',
                icon: 'content_paste'
            },
            {
                tooltip: 'help',
                type: 'help',
                path: '/*',
                icon: 'help'
            },
            {
                divider: true
            },
            {
                tooltip: 'test',
                type: 'test',
                icon: 'bug_report',
                hidden: true
            },
            {
                caption: 'Virtual Services',
                type: 'custom',
                path: '/*',
                icon: 'group_work',
                help: true
            },
            {
                tooltip: 'Settings',
                type: 'settings',
                icon: 'settings'
            },
            {
                caption: 'API',
                type: 'api',
                icon: 'code',
                hidden: true,
                help: true
            }
        ];
    }
    AppPagesService.prototype.getHelpDefault = function () {
        var defaultp = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(this.pages, function (p) { return !!p.help && !!p.helpDefault; });
        return defaultp ? defaultp.type : '';
    };
    AppPagesService.prototype.getHelpPages = function () {
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(this.pages, function (p) { return !!p.help; });
    };
    AppPagesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppPagesService);
    return AppPagesService;
}());



/***/ }),

/***/ "../../../../../src/app/services/browser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DefaultOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interaction_service__ = __webpack_require__("../../../../../src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_pages_service__ = __webpack_require__("../../../../../src/app/services/app-pages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DefaultOptions = (function () {
    function DefaultOptions() {
        this.namePrp = 'name';
        this.icon = 'label';
        this.template = null;
        this.type = '';
        this.showAll = false;
        this.description = null;
    }
    return DefaultOptions;
}());

var route_cache = {
    id: null
};
var BrowserService = (function () {
    function BrowserService(interaction, app, router, u) {
        this.interaction = interaction;
        this.app = app;
        this.router = router;
        this.u = u;
        this.options = new DefaultOptions();
        this.onChanged = null;
        this.documents = [];
        this._documents = [];
        this.currentInfo = null;
        this.current = null;
        this.current_str = null;
        this.idle = true;
        this.loading = false;
        this._startId = null;
        var self = this;
        self.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* NavigationEnd */]) {
                self.u.parseUrlId(event['url'], function (url, id) {
                    if (route_cache.id && route_cache.id !== id) {
                        self.navigateById(id);
                    }
                });
            }
        });
    }
    BrowserService.prototype._refresh = function () {
        var self = this;
        self.documents = ((self.options || {}).type && !self.options.showAll) ?
            __WEBPACK_IMPORTED_MODULE_5_lodash___default()(self._documents).filter(function (d) { return d._type === self.options.type; }).value() :
            self._documents;
        var cur = (self.current || {})._id || self._startId;
        var tosel = cur ? __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.find(self.documents || [], function (d) { return d._id === cur; }) : null;
        self.select(tosel);
        if (__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isFunction(self.onChanged)) {
            self.onChanged(self.documents);
        }
        self._startId = null;
    };
    BrowserService.prototype.newElement = function () {
        var self = this;
        var doc = {};
        var baseDoc = self.u.clone(self.options.template);
        __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.extend(doc, baseDoc);
        doc._id = self.u.guid();
        doc._type = self.options.type;
        doc._new = true;
        if (__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.has(doc, 'name')) {
            doc.name = this.u.getNewName(self._documents, doc.name);
        }
        self._documents.push(doc);
        self.current = doc;
        this._refresh();
        this.onSelectionChanged();
    };
    BrowserService.prototype.refresh = function (deep) {
        var self = this;
        self.idle = true;
        if (deep || this._documents.length <= 0) {
            self.interaction.getDocuments().subscribe(function (docs) {
                self._documents = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.sortBy(docs, self.options.namePrp || 'name');
                self._refresh();
                self.idle = false;
                self.onLoaded();
            }, function (err) {
                self.u.error(err);
                self.idle = false;
                self.onLoaded();
            });
        }
        else {
            self._refresh();
            self.idle = false;
        }
    };
    BrowserService.prototype.register = function (o) {
        var self = this;
        self.u.parseUrlId(self.router.url, function (url, id) { return self._startId = id; });
        self.options = new DefaultOptions();
        if (__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isString(o)) {
            o = { type: o };
        }
        __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.extend(self.options, o || {});
        var myp = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.find(self.app.pages, function (p) { return p.type === o.type; });
        if (myp) {
            self.options.icon = myp.icon;
        }
        self.refresh(true);
    };
    BrowserService.prototype.onSelectionChanged = function (o) {
        if (__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isFunction(this.options['onSelect'])) {
            this.options['onSelect'](o);
        }
    };
    BrowserService.prototype.onLoaded = function () {
        if (__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.isFunction(this.options['onLoaded'])) {
            this.options['onLoaded'](this._documents);
        }
    };
    BrowserService.prototype.deregister = function () {
        this.documents.splice(0);
        this.current = null;
        this.currentInfo = null;
        this.current_str = null;
        this.options = new DefaultOptions();
    };
    BrowserService.prototype.navigateById = function (id) {
        var self = this;
        self.select(__WEBPACK_IMPORTED_MODULE_5_lodash___default.a.find(self.documents || [], function (d) { return d._id === id; }));
    };
    BrowserService.prototype.navigate = function (o) {
        var self = this;
        route_cache.id = o._id;
        self.u.parseUrlId(this.router.url, function (url, id) {
            self.router.navigate([url, o._id]);
        });
        this.select(o);
    };
    BrowserService.prototype.select = function (o) {
        var self = this;
        if (self.loading) {
            return;
        }
        self.currentInfo = o;
        route_cache.id = (o || {})._id;
        if (!o || o._new) {
            self.current = (o || {})._new ? o : null;
            this.current_str = (o || {})._new ? JSON.stringify(o) : null;
        }
        else {
            self.loading = true;
            self.interaction.getDocument(o).subscribe(function (doc) {
                self.current = doc;
                self.current_str = doc ? JSON.stringify(doc, null, 2) : null;
                self.loading = false;
                self.onSelectionChanged(doc);
            }, function (err) {
                console.error(err);
                self.loading = false;
                self.onSelectionChanged(null);
            });
        }
    };
    BrowserService.prototype.save = function (message) {
        this.interaction.save(this.current, message || 'Element successfully updated!');
    };
    BrowserService.prototype.saveAll = function () {
        var self = this;
        var _new = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.find(self.documents, function (d) { return d._new; });
        return new Promise(function (resolve, reject) {
            if (_new) {
                self.interaction.save(_new, '"' + (_new.name || _new.title || _new._id) + '" successfully updated!', function (err) {
                    delete _new._new;
                    self.saveAll().then(function () { return resolve(); });
                });
            }
            else {
                resolve();
            }
        });
    };
    BrowserService.prototype.remove = function (doc) {
        var self = this;
        var ex = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.find(self._documents, function (d) { return d._id === doc._id; });
        if (ex) {
            __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.pull(self._documents, ex);
        }
    };
    BrowserService.prototype._delete = function () {
        var self = this;
        self.remove(self.current);
        self.current = null;
        self.current_str = null;
        self._refresh();
        self.onSelectionChanged();
    };
    BrowserService.prototype.delete = function (message) {
        var self = this;
        self.u.confirm({
            message: message || 'Delete current document?',
            ok: 'Ok',
            cancel: 'Cancel'
        }, function (data) {
            if (data.resp === 'ok') {
                if (self.current._new) {
                    self._delete();
                }
                else {
                    self.interaction.delete(self.current).subscribe(function () {
                        self._delete();
                    }, function (err) {
                        console.error(err);
                        self.loading = false;
                    });
                }
            }
        });
    };
    BrowserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__interaction_service__["a" /* InteractionService */],
            __WEBPACK_IMPORTED_MODULE_2__app_pages_service__["a" /* AppPagesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__utils_service__["a" /* UtilsService */]])
    ], BrowserService);
    return BrowserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_pages_service__ = __webpack_require__("../../../../../src/app/services/app-pages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interaction_service__ = __webpack_require__("../../../../../src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartService = (function () {
    function CartService(u, app, interaction) {
        this.u = u;
        this.app = app;
        this.interaction = interaction;
        this.items = [];
        this.scenario = null;
    }
    CartService.prototype.add = function (o) {
        if (!o) {
            return;
        }
        var type = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.find(this.items, function (i) { return i.type === o._type; });
        if (!type) {
            var page = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.find(this.app.pages, function (p) { return p.type === o._type; });
            type = {
                title: (page || {}).caption || o._type || 'unknown',
                type: o._type,
                icon: (page || {}).icon || 'label_outline',
                items: []
            };
            this.items.push(type);
        }
        var xo = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.find(type.items, function (i) { return i._id === o._id; });
        if (!xo) {
            type.items.push(o);
        }
    };
    CartService.prototype.count = function () {
        var c = 0;
        this.items.forEach(function (i) { return c += i.items.length; });
        return c;
    };
    CartService.prototype.clear = function (o) {
        if (o) {
            // if (this.items[o._type] && this.items[o._type][o._id]) {
            //   delete this.items[o._type][o._id];
            // }
        }
        else {
            this.items.splice(0);
        }
    };
    CartService.prototype.selection = function () {
        var selection = [];
        this.items.forEach(function (i) {
            i.items.forEach(function (ii) {
                if (!!ii.selected) {
                    selection.push(ii);
                }
            });
        });
        return selection;
    };
    CartService.prototype.toggleSelection = function () {
        var sel = this.selection();
        if (sel.length) {
            sel.forEach(function (i) { return i.selected = false; });
        }
        else {
            this.items.forEach(function (i) { return i.items.forEach(function (ii) { return ii.selected = true; }); });
        }
    };
    CartService.prototype.removeSelection = function () {
        this.items.forEach(function (i) { return __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.remove(i.items, function (ii) { return ii.selected; }); });
    };
    CartService.prototype.contains = function (o) {
        return __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.find(this.items, function (i) { return __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.find(i.items, function (ii) { return ii._id === o._id; }); });
    };
    CartService.prototype.push = function () {
        var sel = this.selection();
        this.interaction.push(sel, this.scenario);
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_2__app_pages_service__["a" /* AppPagesService */],
            __WEBPACK_IMPORTED_MODULE_3__interaction_service__["a" /* InteractionService */]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "../../../../../src/app/services/dialogs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_parameter_editor_parameter_editor_component__ = __webpack_require__("../../../../../src/app/components/parameter-editor/parameter-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_value_editor_value_editor_component__ = __webpack_require__("../../../../../src/app/components/value-editor/value-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DialogsService = (function () {
    function DialogsService(u, dialog) {
        this.u = u;
        this.dialog = dialog;
    }
    DialogsService.prototype.editParameter = function (p) {
        var self = this;
        var pe = self.dialog.open(__WEBPACK_IMPORTED_MODULE_2__components_parameter_editor_parameter_editor_component__["a" /* ParameterEditorComponent */], {
            width: '500px',
            data: {
                parameter: self.u.clone(p)
            }
        });
        pe.afterClosed().subscribe(function (op) { return __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.extend(p, op || {}); });
    };
    DialogsService.prototype.editValue = function (v) {
        var self = this;
        var pe = self.dialog.open(__WEBPACK_IMPORTED_MODULE_3__components_value_editor_value_editor_component__["a" /* ValueEditorComponent */], {
            width: '500px',
            data: { value: self.u.clone(v) }
        });
        pe.afterClosed().subscribe(function (ov) { return __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.extend(v, ov || {}); });
    };
    DialogsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialog */]])
    ], DialogsService);
    return DialogsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/interaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InteractionEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_settings_service__ = __webpack_require__("../../../../../src/app/services/user-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InteractionEvent = (function () {
    function InteractionEvent(type) {
        this.type = type;
    }
    return InteractionEvent;
}());

var InteractionService = (function () {
    function InteractionService(http, user, u) {
        this.http = http;
        this.user = user;
        this.u = u;
        this.types = {
            custom: 'custom',
            connections: 'connections',
            queries: 'queries',
            documents: 'documents',
            previews: 'previews'
        };
        this.events = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InteractionService_1 = InteractionService;
    InteractionService._err = function (cb) {
        return function (err) {
            if (err) {
                console.error(err);
            }
            if (cb) {
                cb(err);
            }
        };
    };
    InteractionService.prototype.login = function () {
        // TODO
    };
    InteractionService.prototype.logout = function () {
        // TODO
    };
    InteractionService.prototype.getInfo = function () {
        return this.http.get(this.user.getUrl('api/scenario/current'));
    };
    InteractionService.prototype.getLog = function (cb) {
        this.http.get(this.user.getUrl('api/log'))
            .subscribe(function (r) { return cb(null, r); }, InteractionService_1._err(cb));
    };
    InteractionService.prototype.getScenarios = function () {
        return this.http.get(this.user.getUrl('api/scenario'));
    };
    InteractionService.prototype.getDocuments = function () {
        return this.http.get(this.user.getUrl('api/scenario/documents'));
    };
    InteractionService.prototype.getDocument = function (o) {
        var id = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.isString(o) ? o : (o.id || o._id);
        return this.http.get(this.user.getUrl('api/scenario/document', id));
    };
    InteractionService.prototype.save = function (o, message, cb) {
        var self = this;
        cb = cb || this.u.noop;
        this.http.post(self.user.getUrl('api/scenario/save'), o)
            .subscribe(function (r) {
            delete o._new;
            if (message) {
                self.u.snack(message);
            }
            cb(null, r);
        }, InteractionService_1._err(cb));
    };
    InteractionService.prototype.setScenario = function (scenario, cb) {
        this.http.post(this.user.getUrl('api/scenario/apply'), scenario)
            .subscribe(function (r) { return cb(null, r); }, InteractionService_1._err());
    };
    InteractionService.prototype.saveScenario = function (scenario, cb) {
        this.http.post(this.user.getUrl('api/scenario/update'), scenario)
            .subscribe(function (r) { return cb(null, r); }, InteractionService_1._err());
    };
    InteractionService.prototype.testConnection = function (o, cb) {
        this.http.post(this.user.getUrl('api/data/test/conn'), o)
            .subscribe(function (r) { return cb(); }, InteractionService_1._err(cb));
    };
    InteractionService.prototype.getProviders = function () {
        return this.http.get(this.user.getUrl('api/data/providers'));
    };
    InteractionService.prototype.getSchema = function (cnnId, cb) {
        this.http.get(this.user.getUrl('api/data/schema', cnnId))
            .subscribe(function (r) { return cb(null, r); }, InteractionService_1._err(cb));
    };
    InteractionService.prototype.getResult = function (query, cb) {
        this.http.post(this.user.getUrl('api/data/test/exec'), query)
            .subscribe(function (result) { return cb(null, result); }, InteractionService_1._err(cb));
    };
    InteractionService.prototype.delete = function (o) {
        return this.http.delete(this.user.getUrl('api/scenario', o._id, o._type));
    };
    InteractionService.prototype.deleteNotUsedPreviews = function () {
        console.log('TODO');
    };
    InteractionService.prototype.push = function (docs, scenario) {
        var self = this;
        self.http.post(self.user.getUrl('api/scenario/push'), { source: docs, target: scenario })
            .subscribe(function (r) {
            self.u.snack('' + r);
            self.events.emit(new InteractionEvent('push'));
        }, function (err) { return self.u.error(err); });
    };
    InteractionService.prototype.download = function (folder) {
        var self = this;
        self.http.get(self.user.getUrl('api/scenario/download', folder), { responseType: 'blob' })
            .subscribe(function (blob) {
            var url = window.URL.createObjectURL(blob);
            if (navigator.msSaveOrOpenBlob) {
                navigator.msSaveBlob(blob, folder + '.zip');
            }
            else {
                var a = document.createElement('a');
                a.href = url;
                a.download = folder + '.zip';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
            window.URL.revokeObjectURL(url);
        }, InteractionService_1._err());
    };
    InteractionService.prototype.upload = function (data, cb) {
        var self = this;
        self.http.post(self.user.getUrl('api/scenario/upload'), data)
            .subscribe(function (r) {
            self.u.snack('Scenario uploaded!');
            cb();
        }, InteractionService_1._err(cb));
    };
    InteractionService.prototype.getSystemParameters = function () {
        return this.http.get(this.user.getUrl('api/data/system'));
    };
    InteractionService.prototype.api = function (cb) {
        var self = this;
        self.http.get(self.user.getUrl('api')).subscribe(function (r) { return cb(r); }, function (err) { return self.u.error(err); });
    };
    InteractionService.prototype.templatize = function (options, cb) {
        var self = this;
        self.http.post(self.user.getUrl('api/data/template'), options)
            .subscribe(function (r) { return cb(null, r); }, InteractionService_1._err(cb));
    };
    InteractionService.prototype.test = function (o, cb) {
        try {
            var data = o.body ? JSON.parse(o.body) : null;
            var body = (data && ['post', 'put'].indexOf(o.verb) > -1) ? data : null;
            var params = (data && ['get', 'delete'].indexOf(o.verb) > -1) ? this.u.getUrlParams(data) : null;
            this.http[o.verb](this.u.checkUrl(o.host, o.path + (params || '')), body || {})
                .subscribe(function (r) { return cb(null, r); }, function (err) { return cb(err); });
        }
        catch (err) {
            cb(err);
        }
    };
    InteractionService = InteractionService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__user_settings_service__["a" /* UserSettingsService */],
            __WEBPACK_IMPORTED_MODULE_3__utils_service__["a" /* UtilsService */]])
    ], InteractionService);
    return InteractionService;
    var InteractionService_1;
}());



/***/ }),

/***/ "../../../../../src/app/services/log.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_settings_service__ = __webpack_require__("../../../../../src/app/services/user-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interaction_service__ = __webpack_require__("../../../../../src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogService = (function () {
    function LogService(user, interaction) {
        var _this = this;
        this.user = user;
        this.interaction = interaction;
        this._socket = null;
        this.items = [];
        this.isActive = function () { return !!_this._socket; };
        this.connect();
    }
    LogService.prototype.connect = function () {
        var self = this;
        if (!self._socket) {
            self.interaction.getLog(function (err, pre) {
                self.items.push.apply(self.items, pre || []);
                var url = self.user.settings['host'];
                self._socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(url);
                self._socket.on('log', function (log) {
                    self.items.push(log);
                });
                self._socket.on('error', console.error);
            });
        }
    };
    LogService.prototype.disconnect = function () {
        if (!!this._socket) {
            this._socket.disconnect();
            this._socket = null;
        }
    };
    LogService.prototype.ngOnInit = function () {
    };
    LogService.prototype.ngOnDestroy = function () {
        this.disconnect();
        this.items.splice(0);
    };
    LogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_settings_service__["a" /* UserSettingsService */],
            __WEBPACK_IMPORTED_MODULE_2__interaction_service__["a" /* InteractionService */]])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "../../../../../src/app/services/schema-cache.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SchemaCacheEvent */
/* unused harmony export SchemaPage */
/* unused harmony export SchemaHelper */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaCacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interaction_service__ = __webpack_require__("../../../../../src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SchemaCacheEvent = (function () {
    function SchemaCacheEvent() {
    }
    return SchemaCacheEvent;
}());

var SchemaPage = (function () {
    function SchemaPage(info) {
        this.title = '';
        this.type = '';
        this.pages = [];
        this.value = '';
        this.icon = '';
        this.postfix = '';
        this.sortField = 'title';
        this.priority = 0;
        this.prev = null;
        this.original = null;
        __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.assign(this, info);
    }
    SchemaPage.prototype.addPage = function (page) {
        page.prev = this;
        this.pages.push(page);
    };
    return SchemaPage;
}());

var SchemaHelper = (function () {
    function SchemaHelper(u) {
        this.u = u;
        this.provider = '';
        this.providers = {
            mysql: 'mysql',
            oracle: 'oracle',
            ibmdb2: 'ibmdb2',
            sqlserver: 'sqlserver'
        };
    }
    SchemaHelper._isTableOrRoutine = function (ele) {
        return ele.original.TABLE_TYPE || ele.original.ROUTINE_TYPE;
    };
    SchemaHelper.prototype._getFix = function (pre, field) {
        var self = this;
        switch (self.provider) {
            case self.providers.mysql:
            case self.providers.oracle:
            case self.providers.ibmdb2:
                return field ? '' : '';
            case self.providers.sqlserver:
            default: return pre ? '[' : ']';
        }
    };
    SchemaHelper.prototype.getElementName = function (ele) {
        var self = this;
        if (SchemaHelper._isTableOrRoutine(ele)) {
            var schema = ele.original.TABLE_SCHEMA || ele.original.SPECIFIC_SCHEMA;
            return ((schema || '').toLowerCase() !== 'dbo') ? self._getFix(true) + schema + self._getFix() +
                '.' + self._getFix(true) + ele.value + self._getFix() : self._getFix(true) + ele.value + self._getFix();
        }
        else {
            return self._getFix(true, true) + ele.value + self._getFix(false, true);
        }
    };
    SchemaHelper.prototype.generateSelect = function (ele, limit) {
        var self = this;
        if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isUndefined(limit)) {
            limit = 100;
        }
        var fields = '';
        ele.pages.forEach(function (f) {
            if (fields) {
                fields += ',';
            }
            fields += '\n\t' + self.getElementName(f);
        });
        switch (self.provider) {
            case self.providers.mysql:
                return 'SELECT' + fields + '\nFROM\n\t' + self.getElementName(ele) + (limit > 0 ? '\nLIMIT ' + limit : '');
            case self.providers.oracle:
                return 'SELECT' + fields + '\nFROM\n\t' + self.getElementName(ele);
            case self.providers.ibmdb2:
                return 'SELECT' + fields + '\nFROM\n\t' + self.getElementName(ele) + (limit > 0 ? '\nFETCH FIRST ' + limit + ' ROWS ONLY' : '');
            case self.providers.sqlserver:
            default:
                return 'SELECT\n\t' + (limit > 0 ? 'TOP ' + limit : '') + fields + '\nFROM\n\t' + self.getElementName(ele);
        }
    };
    SchemaHelper.prototype.generateStored = function (ele) {
        var params_declare = '';
        var params_set = '';
        var params_exec = '';
        var params_out = '';
        ele.pages.forEach(function (p) {
            if (p.original.PARAMETER_MODE && p.original.PARAMETER_MODE.substr(0, 2) === 'IN') {
                if (params_declare) {
                    params_declare += ',\n\t';
                }
                else {
                    params_declare += 'DECLARE\n\t';
                }
                var len = (p.original.CHARACTER_MAXIMUM_LENGTH && parseInt(p.original.CHARACTER_MAXIMUM_LENGTH + '', 10) !== 0) ?
                    '(' + p.original.CHARACTER_MAXIMUM_LENGTH + ')' : '';
                params_declare += p.original.PARAMETER_NAME + ' ' + p.original.DATA_TYPE + len;
                params_set += 'SET ' + p.original.PARAMETER_NAME + ' = {VALUE}\n';
                if (params_exec) {
                    params_exec += ', ';
                }
                params_exec += p.original.PARAMETER_NAME;
            }
            else if (p.original.PARAMETER_MODE) {
                if (params_declare) {
                    params_declare += ',\n\t';
                }
                else {
                    params_declare += 'DECLARE\n\t';
                }
                var len = (p.original.CHARACTER_MAXIMUM_LENGTH && parseInt(p.original.CHARACTER_MAXIMUM_LENGTH + '', 10) !== 0) ?
                    '(' + p.original.CHARACTER_MAXIMUM_LENGTH + ')' : '';
                params_declare += p.original.PARAMETER_NAME + ' ' + p.original.DATA_TYPE + len;
                params_out = p.original.PARAMETER_NAME + ' = ';
            }
        });
        if (params_declare) {
            params_declare += ';\n' + params_set + '\n';
        }
        if (params_exec) {
            params_exec += ';';
        }
        if (!params_out) {
            params_declare += '\nDECLARE @RC int;\n\n';
            params_out = '@RC = ';
        }
        return params_declare + 'EXEC ' + params_out + '[' + ele.original.ROUTINE_SCHEMA + '].[' +
            ele.original.ROUTINE_NAME + '] ' + params_exec;
    };
    SchemaHelper.prototype.generateFunction = function (ele) {
        var params_declare = '';
        var params_exec = '';
        var params_out = '';
        var params_set = '';
        var outtable = ele.original.DATA_TYPE === 'TABLE';
        ele.pages.forEach(function (p) {
            if (p.original.PARAMETER_MODE && p.original.PARAMETER_MODE.substr(0, 2) === 'IN') {
                if (params_declare) {
                    params_declare += ',\n\t';
                }
                else {
                    params_declare += 'DECLARE\n\t';
                }
                var len = (p.original.CHARACTER_MAXIMUM_LENGTH && parseInt(p.original.CHARACTER_MAXIMUM_LENGTH, 10) !== 0) ?
                    '(' + p.original.CHARACTER_MAXIMUM_LENGTH + ')' : '';
                params_declare += p.original.PARAMETER_NAME + ' ' + p.original.DATA_TYPE + len;
                if (params_exec) {
                    params_exec += ', ';
                }
                params_exec += p.original.PARAMETER_NAME + (outtable ? '' : '={VALUE}');
                params_set += 'SET ' + p.original.PARAMETER_NAME + ' = {VALUE}\n';
            }
            else if (p.original.PARAMETER_MODE) {
                if (params_declare) {
                    params_declare += ',\n\t';
                }
                else {
                    params_declare += 'DECLARE\n\t';
                }
                var len = (p.original.CHARACTER_MAXIMUM_LENGTH && parseInt(p.original.CHARACTER_MAXIMUM_LENGTH, 10) !== 0) ?
                    '(' + p.original.CHARACTER_MAXIMUM_LENGTH + ')' : '';
                params_declare += '@RES ' + p.original.DATA_TYPE + len;
                params_out = '@RES = ';
            }
        });
        if (params_exec && !outtable) {
            params_exec += ';';
        }
        if (params_out) {
            params_exec += '\nSELECT @RES AS RESULT';
        }
        return outtable ?
            params_declare + '\n\n' + params_set + '\n\nSELECT * FROM [' + ele.original.ROUTINE_SCHEMA + '].[' +
                ele.original.ROUTINE_NAME + '](' + params_exec + ')' :
            params_declare + '\n\nEXEC ' + params_out + '[' + ele.original.ROUTINE_SCHEMA + '].[' +
                ele.original.ROUTINE_NAME + '] ' + params_exec;
    };
    SchemaHelper.prototype.getSqlDate = function (name) {
        var self = this;
        switch (self.provider) {
            case self.providers.mysql:
                return 'str_to_date(\'{{=' + name + '}}\', \'%Y-%m-%d %H:%i:%s\')';
            case self.providers.oracle:
            case self.providers.ibmdb2:
                return 'TO_DATE(\'{{=' + name + '}}\',\'YYYY-MM-DD"T"HH24:MI:SS\')';
            case self.providers.sqlserver:
            default:
                return 'CONVERT(datetime,\'{{=' + name + '}}\', 126)';
        }
    };
    SchemaHelper.prototype.getParameterSql = function (p) {
        switch (this.u.getDataType(p.dataType)) {
            case 'date':
                return this.getSqlDate(p.name);
            case 'string':
                return '\'{{=' + p.name + '}}\'';
            case 'bool':
            case 'number':
            default:
                return '{{=' + p.name + '}}';
        }
    };
    return SchemaHelper;
}());

var SchemaCacheService = (function () {
    function SchemaCacheService(interaction, u) {
        this.interaction = interaction;
        this.u = u;
        this.schemas = {};
        this.paramStars = [];
        this.idle = false;
        this.cnnId = null;
        this.schema = null;
        this.error = null;
        this.helper = new SchemaHelper(this.u);
        this.events = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SchemaCacheService.prototype.findPage = function (t, list1, list2) {
        var p = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.find(list1, function (p1) { return p1.title === t; });
        if (p) {
            return p;
        }
        return __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.find(list2, function (p2) { return p2.title === t; });
    };
    SchemaCacheService.prototype.build = function () {
        var self = this;
        var main = new SchemaPage({
            title: (self.schema || {}).title || 'none',
            sortField: 'priority'
        });
        if (!self.schema) {
            return main;
        }
        var pT = new SchemaPage({ title: 'Tables', type: 'tables', icon: 'grid_on', priority: 0 });
        main.addPage(pT);
        var pV = new SchemaPage({ title: 'Viewes', type: 'views', icon: 'remove_red_eye', priority: 1 });
        main.addPage(pV);
        // TABELLE & VISTE
        if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isArray(self.schema.tables)) {
            self.schema.tables.forEach(function (t) {
                var p = new SchemaPage({
                    title: t.TABLE_NAME,
                    type: 'table',
                    icon: (t.TABLE_TYPE === 'VIEW') ? 'remove_red_eye' : 'grid_on',
                    value: t.TABLE_NAME,
                    original: t
                });
                if (t.TABLE_TYPE === 'VIEW') {
                    pV.addPage(p);
                }
                else {
                    pT.addPage(p);
                }
            });
        }
        if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isArray(self.schema.views)) {
            self.schema.views.forEach(function (t) {
                var p = new SchemaPage({
                    title: t.TABLE_NAME,
                    type: 'view',
                    icon: 'remove_red_eye',
                    value: t.TABLE_NAME,
                    original: t
                });
                pV.addPage(p);
            });
        }
        // COLONNE x TABELLE & VISTE
        if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isArray(self.schema.columns)) {
            self.schema.columns.forEach(function (c) {
                var p = self.findPage(c.TABLE_NAME, pT.pages, pV.pages);
                var dp = new SchemaPage({
                    title: c.COLUMN_NAME + ' (' + c.DATA_TYPE + ')',
                    icon: 'filter_center_focus',
                    value: c.COLUMN_NAME,
                    postfix: c.DATA_TYPE,
                    original: c
                });
                if (p) {
                    p.addPage(dp);
                }
            });
        }
        var pS = new SchemaPage({ title: 'Storeds', type: 'storeds', icon: 'slideshow', priority: 2 });
        main.addPage(pS);
        var pF = new SchemaPage({ title: 'Functions', type: 'functions', icon: 'slideshow', priority: 3 });
        main.addPage(pF);
        // STOREDS & FUNCTIONS
        if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isArray(self.schema.routines)) {
            self.schema.routines.forEach(function (r) {
                var p = new SchemaPage({
                    title: r.ROUTINE_NAME,
                    type: (r.ROUTINE_TYPE === 'PROCEDURE') ? 'procedure' : 'function',
                    icon: 'slideshow',
                    value: r.ROUTINE_NAME,
                    original: r,
                    popup: r.ROUTINE_DEFINITION
                });
                if (r.ROUTINE_TYPE === 'PROCEDURE') {
                    pS.addPage(p);
                }
                else {
                    pF.addPage(p);
                }
            });
        }
        // COLONNE x STOREDS & FUNCTIONS
        if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isArray(self.schema.routineColumns)) {
            self.schema.routineColumns.forEach(function (c) {
                var p = self.findPage(c.TABLE_NAME, pS.pages, pF.pages);
                var dp = new SchemaPage({
                    title: c.COLUMN_NAME + ' (' + c.DATA_TYPE + ')',
                    icon: 'filter_center_focus',
                    value: c.COLUMN_NAME,
                    postfix: c.DATA_TYPE,
                    original: c
                });
                if (p) {
                    p.addPage(dp);
                }
            });
        }
        if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isArray(self.schema.parameters)) {
            self.schema.parameters.forEach(function (p) {
                var r = self.findPage(p.SPECIFIC_NAME, pS.pages, pF.pages);
                var dp = new SchemaPage({
                    title: p.PARAMETER_NAME ? p.PARAMETER_NAME : 'OUT',
                    icon: 'filter_tilt_shift',
                    value: p.PARAMETER_NAME,
                    postfix: p.DATA_TYPE,
                    original: p
                });
                if (r) {
                    r.addPage(dp);
                }
            });
        }
        return main;
    };
    SchemaCacheService.prototype.getInfoPage = function (page) {
        var info = new SchemaPage({
            prev: page.prev,
            title: page.title,
            pages: []
        });
        __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.keys(page.original).forEach(function (pn) {
            info.pages.push(new SchemaPage({ title: pn + ': ' + page.original[pn] }));
        });
        return info;
    };
    SchemaCacheService.prototype.getSchema = function (cnnId) {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (!self.schemas[cnnId]) {
                self.interaction.getSchema(cnnId, function (err, schema) {
                    if (err) {
                        return reject(err);
                    }
                    self.schemas[cnnId] = schema;
                    resolve(self.schemas[cnnId]);
                });
            }
            else {
                resolve(self.schemas[cnnId]);
            }
        });
    };
    SchemaCacheService.prototype.checkSchema = function (schema) {
        this.schema = schema;
        if (this.schema && !this.schema.model) {
            this.schema.model = this.build();
        }
    };
    SchemaCacheService.prototype.flush = function (cnnId) {
        this.u.empty(this.schemas, cnnId);
    };
    SchemaCacheService.prototype.refresh = function () {
        if (!this.cnnId) {
            return;
        }
        this.flush(this.cnnId);
        this.connection(this.cnnId);
    };
    SchemaCacheService.prototype.connection = function (cnnId) {
        // TODO imposta la connessione corrente
        var self = this;
        if (self.cnnId === cnnId) {
            return;
        }
        self.idle = true;
        self.error = null;
        self.cnnId = cnnId;
        if (!cnnId) {
            self.schema = null;
            self.checkSchema();
            self.idle = false;
        }
        else {
            this.getSchema(this.cnnId)
                .then(function (schema) {
                self.error = null;
                self.checkSchema(schema);
                self.idle = false;
                self.events.emit(new SchemaCacheEvent());
            }, function (err) {
                console.error(err);
                self.error = self.u.getErrorMessage(err);
                self.checkSchema();
                self.idle = false;
                self.events.emit(new SchemaCacheEvent());
            });
        }
    };
    SchemaCacheService.prototype.star = function (p) {
        if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.find(this.paramStars, function (sp) { return sp.id === p.id; })) {
            this.paramStars.push(__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.clone(p));
        }
    };
    SchemaCacheService.prototype.starClear = function () {
        this.paramStars.splice(0);
    };
    SchemaCacheService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__interaction_service__["a" /* InteractionService */],
            __WEBPACK_IMPORTED_MODULE_2__utils_service__["a" /* UtilsService */]])
    ], SchemaCacheService);
    return SchemaCacheService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user-settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var STORE_KEY = 'ECHO-SERVICE2-USER-SETTINGS';
var DEFAULT_SERVER_HOST = 'http://localhost:9001';
var UserSettingsService = (function () {
    function UserSettingsService(u) {
        this.u = u;
        this.settings = {};
        var sts = this.u.storage.get(STORE_KEY) || {};
        __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.extend(this.settings, sts);
        __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.defaults(this.settings, {
            host: DEFAULT_SERVER_HOST,
            debug: false
        });
    }
    UserSettingsService.prototype.update = function () {
        this.u.storage.set(STORE_KEY, this.settings);
    };
    UserSettingsService.prototype.getUrl = function () {
        var parts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parts[_i] = arguments[_i];
        }
        var args = Array.prototype.slice.call(arguments);
        args.unshift(this.settings['host'] || DEFAULT_SERVER_HOST);
        return this.u.checkUrl.apply(null, args);
    };
    UserSettingsService.prototype.ngOnDestroy = function () {
        this.update();
    };
    UserSettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_service__["a" /* UtilsService */]])
    ], UserSettingsService);
    return UserSettingsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UtilsService = (function () {
    function UtilsService(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.storage = {
            set: function (key, o) {
                var o_str = o ? JSON.stringify(o) : '';
                localStorage.setItem(key, o_str);
            },
            get: function (key) {
                var o_str = localStorage.getItem(key) || '';
                return o_str ? JSON.parse(o_str) : null;
            },
            del: function (key) {
                localStorage.removeItem(key);
            }
        };
        this.idle = false;
        this.err = null;
    }
    UtilsService_1 = UtilsService;
    UtilsService._s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    UtilsService._isText = function (txt) {
        return !__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.startsWith(txt || '', '<!');
    };
    UtilsService.prototype.clone = function (o) {
        if (!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isObject(o)) {
            return o;
        }
        var str = JSON.stringify(o);
        return JSON.parse(str);
    };
    UtilsService.prototype.noop = function () { };
    UtilsService.prototype.checkUrl = function () {
        var parts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parts[_i] = arguments[_i];
        }
        var args = Array.prototype.slice.call(arguments);
        var url = [];
        args.forEach(function (part) {
            part = part.replace(/:\/\//, '{ECHO-PDL}');
            part.split(/\//).forEach(function (p) {
                if (p === '..') {
                    url.pop();
                }
                else if (p) {
                    url.push(p.replace(/{ECHO-PDL}/, '://'));
                }
            });
        });
        return url.join('/');
    };
    UtilsService.prototype._enc = function (v) {
        return (v + '');
    };
    UtilsService.prototype.getUrlParams = function (o) {
        var self = this;
        var params_cll = [];
        if (o) {
            __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.keys(o).forEach(function (pn) { return params_cll.push(self._enc(pn) + '=' + self._enc(o[pn])); });
        }
        return params_cll.length ? '?' + params_cll.join('&') : '';
    };
    UtilsService.prototype.parseUrlId = function (url, cb) {
        var pos = (url || '').lastIndexOf('/');
        var part_url = (pos > 1) ? url.slice(0, pos) : url;
        var part_id = (pos > 1) ? url.slice(pos + 1) : null;
        if (cb) {
            cb(part_url, part_id);
        }
        return part_url;
    };
    UtilsService.prototype.upperFirst = function (txt) {
        if ((txt || '').length > 0) {
            txt = txt.slice(0, 1).toUpperCase() + txt.slice(1);
        }
        return txt;
    };
    UtilsService.prototype.getErrorMessage = function (err, def) {
        def = def || 'Generic error!';
        if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isString(err)) {
            return err;
        }
        if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isObject(err)) {
            if (err.error && __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isString(err.error) && UtilsService_1._isText(err.error)) {
                return err.error;
            }
            if (err.message) {
                return err.message;
            }
            if (err.data && __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isString(err.data)) {
                return err.data;
            }
            if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isObject(err.data)) {
                return JSON.stringify(err.data);
            }
            if (err && err.status < 0 && __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isObject(err.config)) {
                return '"' + err.config.method + '" on "' + err.config.url + '" has caused an error';
            }
            if (err.statusText) {
                return err.status ? err.status + ' - ' + err.statusText : err.statusText;
            }
        }
        return def;
    };
    UtilsService.prototype.guid = function () {
        return UtilsService_1._s4() + UtilsService_1._s4() + '-' + UtilsService_1._s4() + '-' +
            UtilsService_1._s4() + '-' + UtilsService_1._s4() + '-' + UtilsService_1._s4() + UtilsService_1._s4() + UtilsService_1._s4();
    };
    UtilsService.prototype.getNewName = function (list, template, prop) {
        prop = prop || 'name';
        var name = template;
        var index = 0;
        while (!!__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.find(list, function (i) { return i[prop] === name; })) {
            name = template + '(' + (++index) + ')';
        }
        return name;
    };
    UtilsService.prototype.empty = function (o, pn) {
        if (o) {
            if (pn) {
                __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isArray(pn) ? pn.forEach(function (k) { return delete o[k]; }) : delete o[pn];
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.keys(o).forEach(function (k) { return delete o[k]; });
            }
        }
    };
    UtilsService.prototype.getDataType = function (type) {
        type = type || '';
        switch (type.toLowerCase()) {
            case 'int':
            case 'tiny':
            case 'tinyint':
            case 'short':
            case 'smallint':
            case 'int24':
            case 'long':
            case 'longlong':
            case 'bigint':
            case 'integer':
            case 'number':
            case 'numeric':
            case 'float':
            case 'real':
            case 'double':
            case 'decimal':
            case 'newdecimal':
            case 'currency':
            case 'money':
                return 'number';
            case 'date':
            case 'time':
            case 'time2':
            case 'year':
            case 'newdate':
            case 'datetime':
            case 'datetime2':
            case 'timestamp':
            case 'timestamp2':
            case 'interval':
            case 'smalldatetime':
            case 'datetimeoffset':
                return 'date';
            case 'string':
            case 'var_string':
            case 'character':
            case 'nchar':
            case 'nvarchar':
            case 'char':
            case 'varchar':
            case 'text':
            case 'xml':
            case 'json':
                return 'string';
            case 'bit':
            case 'bool':
            case 'boolean':
                return 'bool';
            default:
                return 'object';
        }
    };
    UtilsService.prototype.confirm = function (o, cb) {
        var confirm = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__components_confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], {
            width: o.width || '340px',
            data: o
        });
        confirm.afterClosed().subscribe(function (result) { return cb(result); });
    };
    UtilsService.prototype.snack = function (message, duration) {
        this.snackBar.open(message, null, {
            duration: duration || 3000
        });
    };
    UtilsService.prototype.error = function (err) {
        console.error(err);
        this.err = this.getErrorMessage(err);
    };
    UtilsService.prototype.getNewParameter = function (name) {
        return {
            _id: this.guid(),
            name: name || 'New Parameter',
            description: '',
            type: 'normal',
            systemType: '',
            dataType: 'string',
            value: '',
            defaultValue: '',
            lookup: {
                id: '',
                fieldKey: '',
                fieldValue: ''
            },
            lookupItems: [],
            isHidden: false,
            isMultiSelect: false,
            isReadOnly: false,
            isOptional: false
        };
    };
    UtilsService.prototype.getHtmlId = function (id) {
        return (id || '').toLowerCase().replace(/[\\\/\s:\*\?"<>\|]/gi, '_');
    };
    UtilsService = UtilsService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSnackBar */]])
    ], UtilsService);
    return UtilsService;
    var UtilsService_1;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    github: 'https://github.com/leolmi/echo-service.client'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map