const { getEnabledPlans } = require("../../services/plan");

module.exports = async (req, res, next) => {
  try {
    const result = await getEnabledPlans();

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
