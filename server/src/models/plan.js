const { indexes, schema } = require("../schemas/plan");
const { getInstance } = require("../lib/db");

const Plan = getInstance().define("plan", schema, indexes);

module.exports = Plan;
