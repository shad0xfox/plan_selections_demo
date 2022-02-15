const { ENUM_ITEM_OF_PLAN_STATUS } = require("../libs/enum");
const Sequelize = require("sequelize");

const schema = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  order: {
    type: Sequelize.INTEGER,
    unique: true,
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isIn: [Object.values(ENUM_ITEM_OF_PLAN_STATUS)],
    },
    defaultValue: ENUM_ITEM_OF_PLAN_STATUS.ENABLED,
  },
};

const indexes = {};

module.exports = {
  schema,
  indexes,
};
