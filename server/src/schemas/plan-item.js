const Sequelize = require("sequelize");

const schema = {
  planId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  itemId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
};

const indexes = {};

module.exports = {
  schema,
  indexes,
};
