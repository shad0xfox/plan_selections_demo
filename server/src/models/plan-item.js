const { indexes, schema } = require("../schemas/plan-item");
const { getInstance } = require("../libs/db");

const PlanItem = getInstance().define("plan_item", schema, indexes);

module.exports = PlanItem;
