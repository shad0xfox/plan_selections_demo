require("../config");
const { connect } = require("../lib/db");

module.exports = async function () {
  try {
    await connect();

    await require("./fixture-plan").drop();
    await require("./fixture-item-of-plan").drop();
    await require("./fixture-plan-item").drop();

    await require("./fixture-plan").init();
    await require("./fixture-item-of-plan").init();
    await require("./fixture-plan-item").init();
  } catch (error) {
    console.log(error);
  }
};
