const router = require("express").Router();
const { beforeTogglePlanItemRequest } = require("../../router-hooks/plan-item");
const {
  handleTogglePlanItemRequest,
} = require("../../router-handlers/plan-item");

router.patch("/", [beforeTogglePlanItemRequest, handleTogglePlanItemRequest]);

module.exports = router;
