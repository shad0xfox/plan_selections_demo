const router = require("express").Router();

router.use("/hb", (_, res) => {
  res.send();
});

router.use("/api", require("./apis"));

module.exports = router;
