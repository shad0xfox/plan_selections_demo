const { indexes, schema } = require("../schemas/plan-item");
const { getInstance } = require("../lib/db");

const PlanItem = getInstance().define("plan_item", schema, indexes);

module.exports = PlanItem;
