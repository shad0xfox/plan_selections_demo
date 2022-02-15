const { itemId } = require("../../../libs/validation/schemas/item-of-plan");
const { planId } = require("../../../libs/validation/schemas/plan");
const { validator } = require("../../../libs/validation");

const check = validator.compile({
  planId,
  itemId,
  value: {
    type: "boolean",
  },
});

module.exports = (req, res, next) => {
  const checkResult = check(req.body);

  if (checkResult !== true) {
    const error = new Error("Validation error");
    error.status = 422;
    error.extra = checkResult;
    throw error;
  }

  next();
};
