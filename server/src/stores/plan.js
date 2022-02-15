const { ENUM_ITEM_OF_PLAN_STATUS, ENUM_PLAN_STATUS } = require("../libs/enum");
const Model = require("../models/plan");
const { Op } = require("sequelize");
const { getInstance } = require("../libs/db");

function getEnabledPlans() {
  return Model.findAll({
    attributes: ["id", "name", "price", "pricePrecision", "order"],
    where: {
      status: ENUM_PLAN_STATUS.ENABLED,
    },
    include: {
      association: "planItems",
      attributes: ["id"],
      where: {
        status: ENUM_ITEM_OF_PLAN_STATUS.ENABLED,
      },
      required: false,
      through: {
        attributes: [],
      },
    },
    order: [["order", "asc"]],
  });
}

function getNonArchivedPlanById(id) {
  return Model.findOne({
    where: {
      id,
      status: {
        [Op.ne]: ENUM_PLAN_STATUS.ARCHIVED,
      },
    },
  });
}

function getLastOrderPlan() {
  return Model.findOne({
    attributes: ["order"],
    where: {
      status: {
        [Op.ne]: ENUM_PLAN_STATUS.ARCHIVED,
      },
    },
    order: [["order", "desc"]],
  });
}

function createPlan({ name, order, price }) {
  return Model.create({
    name,
    order,
    price,
    status: ENUM_PLAN_STATUS.ENABLED,
  });
}

function archivePlanById(id, { transaction } = {}) {
  return Model.update(
    {
      status: ENUM_PLAN_STATUS.ARCHIVED,
      order: null,
    },
    {
      where: {
        id,
      },
      transaction,
    }
  );
}

function decreaseOrderGreaterThan(startOrder, { transaction } = {}) {
  // sequelize not support update with order
  // need it because decrease order cause duplicate unique key error
  return getInstance().query(
    "UPDATE `plan` SET `order`=`order` - 1 WHERE `order` >= ? AND `status` != ? order by `order`",
    {
      replacements: [startOrder, ENUM_PLAN_STATUS.ARCHIVED],
      transaction,
    }
  );
}

module.exports = {
  getEnabledPlans,
  getLastOrderPlan,
  createPlan,
  getNonArchivedPlanById,
  archivePlanById,
  decreaseOrderGreaterThan,
};
