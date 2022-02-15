const Model = require("../models/plan-item");

function deleteItemsByPlanId(planId, { transaction } = {}) {
  return Model.destroy({
    where: {
      planId,
    },
    transaction,
  });
}

function createPlanItem(planId, itemId) {
  return Model.create({
    planId,
    itemId,
  });
}

module.exports = {
  deleteItemsByPlanId,
  createPlanItem,
};
