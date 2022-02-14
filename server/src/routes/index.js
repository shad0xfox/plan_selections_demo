const router = require("express").Router();

router.use("/hb", (_, res) => {
  res.send();
});

module.exports = router;
