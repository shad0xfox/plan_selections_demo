const { createPlan, getLastOrderPlan } = require("../../services/plan");

module.exports = async (req, res, next) => {
  try {
    const { name, price } = req.body;
    const lastOrderPlan = await getLastOrderPlan();
    const nextOrder = lastOrderPlan ? lastOrderPlan.order + 1 : 1;

    await createPlan({ name, order: nextOrder, price });

    res.status(201).send();
  } catch (error) {
    next(error);
  }
};
