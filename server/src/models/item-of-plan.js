const { indexes, schema } = require("../schemas/item-of-plan");
const { getInstance } = require("../libs/db");

const ItemOfPlan = getInstance().define("item_of_plan", schema, indexes);

module.exports = ItemOfPlan;
