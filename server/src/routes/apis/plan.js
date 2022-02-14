const router = require("express").Router();
const { handleGetPlansRequest } = require("../../router-handlers/plan");

router.get("/", handleGetPlansRequest);

module.exports = router;
