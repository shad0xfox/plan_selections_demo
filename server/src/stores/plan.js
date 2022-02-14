const { ENUM_ITEM_OF_PLAN_STATUS, ENUM_PLAN_STATUS } = require("../lib/enum");
const Model = require("../models/plan");

function getEnabledPlans() {
  return Model.findAll({
    attributes: ["id", "name", "price", "pricePrecision", "order"],
    where: {
      status: ENUM_PLAN_STATUS.ENABLED,
    },
    include: {
      association: "planItems",
      attributes: ["id"],
      where: {
        status: ENUM_ITEM_OF_PLAN_STATUS.ENABLED,
      },
      required: false,
      through: {
        attributes: [],
      },
    },
  });
}

module.exports = {
  getEnabledPlans,
};
