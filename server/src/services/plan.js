const PlanItemStore = require("../stores/plan-item");
const PlanStore = require("../stores/plan");
const { getInstance } = require("../libs/db");

async function deletePlanById(id) {
  const plan = await PlanStore.getNonArchivedPlanById(id);
  if (!plan) {
    const error = new Error("Not found plan error");
    error.status = 404;
    throw error;
  }

  const startOrder = plan.order + 1;

  const transaction = await getInstance().transaction();

  try {
    await PlanStore.archivePlanById(id, { transaction });
    await PlanStore.decreaseOrderGreaterThan(startOrder, { transaction });
    await PlanItemStore.deleteItemsByPlanId(id, { transaction });

    await transaction.commit();
  } catch (error) {
    // If the execution reaches this line, an error was thrown.
    // We rollback the transaction.
    await transaction.rollback();
    throw error;
  }
}

module.exports = {
  getEnabledPlans: PlanStore.getEnabledPlans,
  getLastOrderPlan: PlanStore.getLastOrderPlan,
  createPlan: PlanStore.createPlan,
  deletePlanById,
};
