"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("../../base/controller/Controller");
const User_1 = require("../model/User");
class UserController extends Controller_1.default {
    constructor(props) {
        super(props);
        this.model = {
            skills: ["js", "html", "css"],
            showSkills: true
        };
    }
    get(resolve, reject) {
        User_1.default().findAll().then(users => {
            resolve(users);
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map