"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const sequelizeConfig_1 = require("../../app/model/sequelizeConfig");
const bootstrapSequilize = () => {
    const storageFile = file => `${process.cwd()}/${file}`;
    const config = sequelizeConfig_1.default(storageFile);
    const conf = {
        host: config.host,
        dialect: config.dialect,
        operatorsAliases: config.operatorsAliases,
        pool: config.pool,
    };
    if (config.storage) {
        conf['storage'] = config.storage;
    }
    return new Sequelize(config.database, config.username, config.password, conf);
};
exports.default = bootstrapSequilize;
//# sourceMappingURL=bootstrapSequilize.js.map