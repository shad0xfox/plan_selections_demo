const { ENUM_PLAN_STATUS } = require("../../libs/enum");

module.exports = [
  {
    id: 1,
    name: "Standard Plan",
    order: 1,
  },
  {
    id: 2,
    name: "Premium Plan",
    price: 388,
    order: 2,
  },
  {
    id: 3,
    name: "Special Plan",
    price: 20,
    order: 3,
  },
  {
    id: 4,
    name: "Disabled Plan",
    price: 20,
    status: ENUM_PLAN_STATUS.DISABLED,
    order: 4,
  },
  {
    id: 5,
    name: "Archived Plan",
    price: 20,
    status: ENUM_PLAN_STATUS.ARCHIVED,
  },
];
