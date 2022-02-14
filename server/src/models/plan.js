const { indexes, schema } = require("../schemas/plan");
const ItemOfPlanModel = require("./item-of-plan");
const PlanItemModel = require("./plan-item");
const { getInstance } = require("../lib/db");

const Plan = getInstance().define("plan", schema, indexes);

Plan.belongsToMany(ItemOfPlanModel, {
  through: PlanItemModel,
  constraints: false,
  as: "planItems",
  foreignKey: "planId",
  otherKey: "itemId",
});

module.exports = Plan;
