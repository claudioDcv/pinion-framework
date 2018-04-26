"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequilizeConfig = (storageFile) => {
    return {
        database: 'database',
        username: 'username',
        password: 'password',
        host: 'localhost',
        dialect: 'sqlite',
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        // SQLite only
        storage: storageFile('database.sqlite')
    };
};
exports.default = sequilizeConfig;
//# sourceMappingURL=sequelizeConfig.js.map