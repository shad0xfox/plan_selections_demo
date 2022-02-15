const { deletePlanById } = require("../../services/plan");

module.exports = async (req, res, next) => {
  try {
    const { planId } = req.params;

    await deletePlanById(planId);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
