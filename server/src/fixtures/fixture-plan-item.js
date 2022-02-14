const Model = require("../models/plan-item");
const documents = require("./data/plan-item");
const tableName = "plan_item";

async function bulkCreateDocument() {
  await Model.bulkCreate(documents, { validate: true });
}

async function init() {
  try {
    await bulkCreateDocument();
    console.log(`[mysql][${tableName}] fixture done`);
  } catch (error) {
    console.log(`[mysql][${tableName}] fixture failed`, error);
  }
}

function drop() {
  return Model.sync({ force: true });
}

exports.init = init;
exports.drop = drop;
