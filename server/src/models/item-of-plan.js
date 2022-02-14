const { indexes, schema } = require("../schemas/item-of-plan");
const { getInstance } = require("../lib/db");

const ItemOfPlan = getInstance().define("item_of_plan", schema, indexes);

module.exports = ItemOfPlan;
