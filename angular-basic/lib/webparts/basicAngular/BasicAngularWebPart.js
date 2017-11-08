//import 'core-js/es6/object';
//import 'typescript/lib/lib.es6.d.ts';
//import 'es6-shim/es6-shim';
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
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var core_1 = require("@angular/core");
var BasicAngular_module_scss_1 = require("./BasicAngular.module.scss");
var base_angular_webpart_1 = require("./../../core/webparts/base-angular.webpart");
var sp_pnp_js_1 = require("sp-pnp-js");
var services_1 = require("./app/shared/services");
var app_1 = require("./app");
var home_1 = require("./app/home");
var list_1 = require("./app/list");
var AngularApp_1 = require("./app/AngularApp");
//require('es6-shim');
//var from = require('array.from');
//delete Array.from;
var BasicAngularWebPart = (function (_super) {
    __extends(BasicAngularWebPart, _super);
    function BasicAngularWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.importDeclarationTypes = [];
        return _this;
    }
    Object.defineProperty(BasicAngularWebPart.prototype, "appDeclarationTypes", {
        get: function () {
            return [
                home_1.HomeComponent,
                list_1.ListComponent,
                AngularApp_1.AngularAppComponent
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicAngularWebPart.prototype, "routes", {
        get: function () {
            return app_1.AppRoutes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicAngularWebPart.prototype, "providers", {
        get: function () {
            var _this = this;
            if (sp_core_library_1.Environment.type === sp_core_library_1.EnvironmentType.Local) {
                return [
                    // Provides the Configuration Service
                    services_1.ConfigurationService,
                    // Provides the ItemsService with its Mocked instance
                    { provide: services_1.ItemsService, useClass: services_1.MockItemsService },
                    // Initialized the ConfigurationService data based on the ClientWebPart configuration
                    { provide: core_1.APP_INITIALIZER, useFactory: function (configurationService) { return function () { return configurationService.load({
                            mocked: true,
                            listName: _this.properties.listName,
                            description: _this.properties.description,
                            styles: BasicAngular_module_scss_1.default
                        }); }; }, deps: [services_1.ConfigurationService], multi: true }
                ];
            }
            else if (sp_core_library_1.Environment.type == sp_core_library_1.EnvironmentType.SharePoint || sp_core_library_1.Environment.type == sp_core_library_1.EnvironmentType.ClassicSharePoint) {
                return [
                    // Provides the Configuration Service
                    services_1.ConfigurationService,
                    // Provides the ItemsService with its Real instance
                    { provide: services_1.ItemsService, useClass: services_1.ItemsService },
                    // Initialized the ConfigurationService data based on the ClientWebPart configuration
                    { provide: core_1.APP_INITIALIZER, useFactory: function (configurationService) { return function () { return configurationService.load({
                            mocked: false,
                            listName: _this.properties.listName,
                            description: _this.properties.description,
                            styles: BasicAngular_module_scss_1.default
                        }); }; }, deps: [services_1.ConfigurationService], multi: true }
                ];
            }
        },
        enumerable: true,
        configurable: true
    });
    BasicAngularWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            sp_pnp_js_1.default.setup({
                spfxContext: _this.context
            });
        });
    };
    Object.defineProperty(BasicAngularWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    BasicAngularWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: "Angular Basic Webpart"
                    },
                    groups: [
                        {
                            groupName: "General Configuration",
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: "Title"
                                })
                            ]
                        },
                        {
                            groupName: "List Configuration",
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('listName', {
                                    label: "List Name"
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return BasicAngularWebPart;
}(base_angular_webpart_1.BaseAngularWebPart));
exports.default = BasicAngularWebPart;

//# sourceMappingURL=BasicAngularWebPart.js.map
