const router = require("express").Router();

router.use("/plans", require("./plan"));
router.use("/itemsOfPlan", require("./item-of-plan"));

module.exports = router;
