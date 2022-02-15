const { ENUM_ITEM_OF_PLAN_STATUS } = require("../../libs/enum");

module.exports = [
  {
    id: 1,
    name: "General",
    order: 1,
  },
  {
    id: 2,
    name: "Specialist",
    order: 2,
  },
  {
    id: 3,
    name: "Physiotherapy",
    order: 3,
  },
  {
    id: 4,
    name: "Birthday Gift",
    order: 4,
  },
  {
    id: 5,
    name: "Disabled Item",
    order: 5,
    status: ENUM_ITEM_OF_PLAN_STATUS.DISABLED,
  },
  {
    id: 6,
    name: "Archived Item",
    status: ENUM_ITEM_OF_PLAN_STATUS.ARCHIVED,
  },
];
