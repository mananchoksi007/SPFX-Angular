"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_1 = require("./home");
var routes = [
    { path: '', component: home_1.HomeComponent },
    { path: '**', redirectTo: '' }
];
exports.AppRoutes = router_1.RouterModule.forRoot(routes, { useHash: true });

//# sourceMappingURL=app.routes.js.map
