const { generateIdSchema } = require("../");

module.exports = {
  planId: generateIdSchema(),
  name: {
    type: "string",
  },
  price: {
    type: "number",
    min: 0,
  },
};
