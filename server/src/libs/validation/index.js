const Validator = require("fastest-validator");

const validator = new Validator({
  useNewCustomCheckerFunction: true,
});

function generateIdSchema(args = {}) {
  return {
    type: "number",
    empty: false,
    integer: true,
    convert: true,
    min: 1,
    ...args,
  };
}

module.exports = {
  validator,
  generateIdSchema,
};
