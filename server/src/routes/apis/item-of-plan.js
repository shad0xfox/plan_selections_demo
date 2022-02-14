const router = require("express").Router();
const {
  handleGetItemsOfPlanRequest,
} = require("../../router-handlers/item-of-plan");

router.get("/", handleGetItemsOfPlanRequest);

module.exports = router;
