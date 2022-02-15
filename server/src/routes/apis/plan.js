const router = require("express").Router();
const {
  beforeCreatePlansRequest,
  beforeDeletePlansRequest,
} = require("../../router-hooks/plan");
const {
  handleCreatePlanRequest,
  handleDeletePlanRequest,
  handleGetPlansRequest,
} = require("../../router-handlers/plan");

router.get("/", [handleGetPlansRequest]);
router.post("/", [beforeCreatePlansRequest, handleCreatePlanRequest]);
router.delete("/:planId", [beforeDeletePlansRequest, handleDeletePlanRequest]);

module.exports = router;
