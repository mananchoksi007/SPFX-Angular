"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var configuration_service_1 = require("./../shared/services/configuration.service");
var services_1 = require("./../shared/services");
var ListComponent = (function () {
    function ListComponent(configurationService, itemsService) {
        this.configurationService = configurationService;
        this.itemsService = itemsService;
        this.listName = "";
        this.items = [];
        this.listName = configurationService.listName;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsService.getItems(this.configurationService.listName).then(function (items) {
            _this.items = items;
        });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        template: require("./list.template.html")
    }),
    __param(0, core_1.Inject(configuration_service_1.ConfigurationService)), __param(1, core_1.Inject(services_1.ItemsService)),
    __metadata("design:paramtypes", [configuration_service_1.ConfigurationService, services_1.ItemsService])
], ListComponent);
exports.ListComponent = ListComponent;

//# sourceMappingURL=list.component.js.map
