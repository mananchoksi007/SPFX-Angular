"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.getComponent = function (selectorId) {
        return core_1.Component({
            selector: "angular-" + selectorId,
            template: "<router-outlet></router-outlet>"
        })((function () {
            function AppComponentInner() {
            }
            return AppComponentInner;
        }()));
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
