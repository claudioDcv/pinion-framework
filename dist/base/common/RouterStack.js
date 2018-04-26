"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("../controller/Controller");
class RouterStack {
    constructor() {
        this.routerList = [];
    }
    register(route) {
        this.routerList[route.name] = route;
    }
    getRouterList() {
        return this.routerList;
    }
    routeResolve(path, request, response) {
        // Exclude ico
        if (path != '/favicon.ico') {
            const route = this.routerList[path];
            console.log(route);
            if (route == undefined) {
                console.log('Error');
                class Error {
                    constructor() {
                        this.code = 500;
                        this.message = 'Error de servidor';
                    }
                }
                const error = new Error;
                const defaultController = new Controller_1.default({ path, request, response, error: Error });
                defaultController.compile();
                return;
            }
            else {
                const controller = route.makeController({ path, request, response });
                controller.compile();
            }
        }
    }
}
exports.default = RouterStack;
//# sourceMappingURL=RouterStack.js.map