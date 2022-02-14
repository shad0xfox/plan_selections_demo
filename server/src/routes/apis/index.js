const router = require("express").Router();

router.use("/plans", require("./plan"));

module.exports = router;
