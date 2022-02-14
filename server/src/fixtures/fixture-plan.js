const Model = require("../models/plan");
const documents = require("./data/plan");
const tableName = "plan";

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
