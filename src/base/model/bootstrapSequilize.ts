const Sequelize = require('sequelize')
import sequilizeConfig from "../../app/model/sequelizeConfig";

const bootstrapSequilize = () => {
    const storageFile = file => `${process.cwd()}/${file}`;

    const config = sequilizeConfig(storageFile)
    const conf = {
        host: config.host,
        dialect: config.dialect,
        operatorsAliases: config.operatorsAliases,     
        pool: config.pool,
      }
    if(config.storage) {
        conf['storage'] = config.storage
    }

    return new Sequelize(config.database, config.username, config.password, conf);    
}

export default bootstrapSequilize