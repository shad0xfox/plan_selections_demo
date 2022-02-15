const Model = require("../models/plan-item");

function deleteItemsByPlanId(planId, { transaction } = {}) {
  return Model.destroy({
    where: {
      planId,
    },
    transaction,
  });
}

function getPlanItem(planId, itemId) {
  return Model.findOne({
    where: {
      planId,
      itemId,
    },
  });
}

function createPlanItem(planId, itemId) {
  return Model.create({
    planId,
    itemId,
  });
}

function deletePlanItem(planId, itemId) {
  return Model.destroy({
    where: {
      planId,
      itemId,
    },
  });
}

module.exports = {
  deleteItemsByPlanId,
  getPlanItem,
  createPlanItem,
  deletePlanItem,
};
