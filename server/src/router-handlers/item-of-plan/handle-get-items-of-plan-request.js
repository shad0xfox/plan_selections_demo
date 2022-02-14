const { getEnabledItemsOfPlan } = require("../../services/item-of-plan");

module.exports = async (req, res, next) => {
  try {
    const result = await getEnabledItemsOfPlan();

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
