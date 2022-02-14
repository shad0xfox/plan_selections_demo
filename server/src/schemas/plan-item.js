const Sequelize = require("sequelize");

const schema = {
  planId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  itemId: {
    type: Sequelize.INTEGER,
    defaultValue: true,
    primaryKey: true,
  },
};

const indexes = {};

module.exports = {
  schema,
  indexes,
};
