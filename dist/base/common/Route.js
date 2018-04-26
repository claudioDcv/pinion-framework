"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Route {
    constructor(name, controller) {
        this.name = name;
        this.controller = controller;
    }
    makeController(props) {
        return new this.controller(props);
    }
}
exports.default = Route;
//# sourceMappingURL=Route.js.map