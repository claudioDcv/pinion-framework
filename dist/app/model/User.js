"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const FactoryModel_1 = require("../../base/factory/FactoryModel");
const User = () => {
    const objects = FactoryModel_1.default.objects();
    return objects.define('user', {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        }
    });
};
exports.default = User;
//# sourceMappingURL=User.js.map