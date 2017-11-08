"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * Angular2 web part base class
 */
require("core-js/es6/object");
require("reflect-metadata");
require("Zones");
//import 'es6-shim/es6-shim';
require("URL");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var app_component_1 = require("./../components/app.component");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
/**
 * All Angular2 client side web parts should inherit from this class.
 */
var BaseAngularWebPart = (function (_super) {
    __extends(BaseAngularWebPart, _super);
    function BaseAngularWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * On property change.
     */
    BaseAngularWebPart.prototype.onPropertyChange = function (propertyPath, newValue) {
        // Trigger app/root-component refresh
        this._zone.run(function () { console.log('Outside Done!'); });
    };
    /**
     * Render the web part. This causes the Angular2 app to be bootstrapped which
     * in turn bootsraps the Angular2 web part root component.
     */
    BaseAngularWebPart.prototype.render = function () {
        // @todo: most likely we need to make this width:100%
        this.domElement.innerHTML = "<angular-" + this.context.instanceId + " />";
        this._bootStrapModule();
    };
    /**
     * Bootstrap the root component of the web part.
     */
    BaseAngularWebPart.prototype._bootStrapModule = function () {
        var self = this;
        platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(self._getModule()).then(function (ngModuleRef) {
            if (self._app["_rootComponents"] != undefined && self._app["_rootComponents"].length > 0) {
                self._component = self._app['_rootComponents'][0]['_component'];
                self._zone.run(function () { console.log('Outside Done!'); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    /**
     * Get the NgModule reference that will act as the root of this web part.
     */
    BaseAngularWebPart.prototype._getModule = function () {
        var component = app_component_1.AppComponent.getComponent(this.context.instanceId);
        var declarations = this.appDeclarationTypes.concat(component);
        var imports = this.importDeclarationTypes;
        var routes = this.routes;
        var providers = this.providers;
        var webPart = this;
        /**
        * Our goal is to define a single module class definition to be instantiated for each
          webpart (like instances of a class). When an instance of the module class is bootstrapped Angular2
          will create an annotation and attach it to the module class. However, when multiple instances of the
          same module class are bootstrapped, only the first annotation associated with the module class will be parsed.
          This results in any other module class instances on the page to not function.
          To allow multiple modules of the same class definitoin on one page to work, we need to define the
          class in a closure to create a new environment for each instance class, so that each annotation
          object will be parsed.
        */
        var AppModule = (function () {
            function AppModule(applicationRef, ngZone) {
                webPart._app = applicationRef; // applicationRef gives us a reference to the Angular2 component's properties
                webPart._zone = ngZone;
            }
            // We now attach required metadata for Angular2 that is allowable within a clousure
            var AppModule1 = Reflect.decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, routes, imports],
                    declarations: declarations,
                    bootstrap: [component],
                    exports: [router_1.RouterModule],
                    providers: providers
                }),
                Reflect.metadata('design:paramtypes', [core_1.ApplicationRef, core_1.NgZone]) // This allows Angular2's DI to inject dependencies
            ], AppModule);
            return AppModule1;
        })();
        return AppModule;
    };
    return BaseAngularWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.BaseAngularWebPart = BaseAngularWebPart;
//export default BaseAngularWebPart; 

//# sourceMappingURL=base-angular.webpart.js.map
