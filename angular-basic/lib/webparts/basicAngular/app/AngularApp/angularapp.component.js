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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AngularAppComponent = (function () {
    function AngularAppComponent() {
        this.name = 'Angular2';
        this.items = [
            'lorem',
            'ipsum',
            'sit',
            'trump :D'
        ];
        this.itemclass = '';
    }
    AngularAppComponent.prototype.selectItem = function (item) {
        this.itemclass = item;
        console.log(this.itemclass);
    };
    AngularAppComponent.prototype.ngOnInit = function () {
        // this.itemsService.getItems(this.configurationService.listName).then((items: ItemModel[]) => {
        //   this.items = items;
        // });
    };
    return AngularAppComponent;
}());
AngularAppComponent = __decorate([
    core_1.Component({
        selector: "angualrapp",
        template: require("./angularapp.template.html"),
        styleUrls: ["../src/webparts/basicangular/app/AngularApp/app.css"]
    }),
    __metadata("design:paramtypes", [])
], AngularAppComponent);
exports.AngularAppComponent = AngularAppComponent;

//# sourceMappingURL=angularapp.component.js.map
