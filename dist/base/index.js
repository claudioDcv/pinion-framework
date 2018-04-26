"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const port = 3000;
const RouterStack_1 = require("./common/RouterStack");
const Route_1 = require("./common/Route");
const Controller_1 = require("./controller/Controller");
class App {
    constructor(port) {
        this.server = null;
        this.port = 3333;
        this.routerStack = new RouterStack_1.default();
        this.requestHandler = (request, response) => {
            const resolveRoute = this.routerStack.routeResolve(request.url, request, response);
        };
        this.port = port || this.port;
        this.server = http.createServer(this.requestHandler);
    }
    registerRoute(path, controller) {
        this.routerStack.register(new Route_1.default(path, controller));
    }
    start() {
        this.server.listen(this.port);
    }
}
exports.base = {
    Controller: Controller_1.default,
    App: App,
};
//# sourceMappingURL=index.js.map