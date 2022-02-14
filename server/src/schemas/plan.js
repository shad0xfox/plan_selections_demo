const { ENUM_PLAN_STATUS } = require("../lib/enum");
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
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    get() {
      const price = this.getDataValue("price");
      const pricePrecision = this.getDataValue("pricePrecision");

      return price / 10 ** pricePrecision;
    },
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
    defaultValue: ENUM_PLAN_STATUS.ENABLED,
  },
};

const indexes = {};

module.exports = {
  schema,
  indexes,
};
