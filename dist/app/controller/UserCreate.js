"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("../../base/controller/Controller");
const User_1 = require("../model/User");
class UserCreate extends Controller_1.default {
    constructor(props) {
        super(props);
        this.model = {
            skills: ["js", "html", "css"],
            showSkills: true
        };
    }
    get(resolve, reject) {
        User_1.default().sync({ force: false }).then(() => {
            // Table created
            User_1.default().create({
                firstName: 'Esteban',
                lastName: 'Rojas'
            })
                .then(user => resolve(user));
        });
    }
}
exports.default = UserCreate;
//# sourceMappingURL=UserCreate.js.map