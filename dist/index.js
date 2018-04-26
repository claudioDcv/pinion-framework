"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const UserController_1 = require("./app/controller/UserController");
const UserCreate_1 = require("./app/controller/UserCreate");
const app = new base_1.base.App(3333);
app.registerRoute('/user', UserController_1.default);
// app.registerRoute('/user/{id}', UserController)
app.registerRoute('/user-create', UserCreate_1.default);
app.start();
//# sourceMappingURL=index.js.map