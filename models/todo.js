'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // todo.belongsTo(models.users, {
      //   foreignKey: 'userId',
      //   as: 'user'
      // })
    }
  }
  todo.init({
    taskName: DataTypes.STRING,
    description: DataTypes.STRING,
    Date: DataTypes.DATE,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'todo',
  });
  return todo;
};