const { getEnabledPlans } = require("../../services/plan");
const { keyBy } = require("lodash");

module.exports = async (req, res, next) => {
  try {
    const plans = await getEnabledPlans();

    res.status(200).json(
      plans.map((plan) => {
        const jsonPlan = plan.toJSON();
        return {
          ...jsonPlan,
          planItems: keyBy(jsonPlan.planItems, "id"),
        };
      })
    );
  } catch (error) {
    next(error);
  }
};
