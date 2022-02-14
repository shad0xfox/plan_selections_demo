const { ENUM_PLAN_STATUS } = require("../lib/enum");
const Sequelize = require("sequelize");

const schema = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  pricePrecision: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 4,
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isIn: [Object.values(ENUM_PLAN_STATUS)],
    },
    defaultValue: ENUM_PLAN_STATUS.ENABLE,
  },
};

const indexes = {};

module.exports = {
  schema,
  indexes,
};
