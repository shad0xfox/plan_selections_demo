const PlanItemStore = require("../stores/plan-item");

async function togglePlanItem(planId, itemId, value) {
  if (value) {
    const planItem = await PlanItemStore.getPlanItem(planId, itemId);

    if (!planItem) {
      await PlanItemStore.createPlanItem(planId, itemId);
    }
  } else {
    await PlanItemStore.deletePlanItem(planId, itemId);
  }
}

module.exports = {
  togglePlanItem,
};
