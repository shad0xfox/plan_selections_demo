const { togglePlanItem } = require("../../services/plan-item");

module.exports = async (req, res, next) => {
  try {
    const { planId, itemId, value } = req.body;

    await togglePlanItem(planId, itemId, value);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
