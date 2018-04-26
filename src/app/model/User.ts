const Sequelize = require('sequelize')
import FactoryModel from "../../base/factory/FactoryModel";

const User = () => {
    const objects = FactoryModel.objects()
    return  objects.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });
}

export default User