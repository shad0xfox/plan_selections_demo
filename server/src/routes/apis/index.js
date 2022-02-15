const router = require("express").Router();

router.use("/plans", require("./plan"));
router.use("/itemsOfPlan", require("./item-of-plan"));
router.use("/planItem", require("./plan-item"));

module.exports = router;
