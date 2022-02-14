const { ENUM_ITEM_OF_PLAN_STATUS } = require("../lib/enum");
const Model = require("../models/item-of-plan");

function getEnabledItemsOfPlan() {
  return Model.findAll({
    attributes: ["id", "name", "order"],
    where: {
      status: ENUM_ITEM_OF_PLAN_STATUS.ENABLED,
    },
  });
}

module.exports = {
  getEnabledItemsOfPlan,
};
