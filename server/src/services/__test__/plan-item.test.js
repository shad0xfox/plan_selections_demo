jest.mock("../../libs/db");
jest.mock("../../stores/plan-item");
const PlanItemService = require("../plan-item");

/**
 * @type jest.Mocked<import('../../stores/plan-item')>
 */
const PlanItemStore = require("../../stores/plan-item");

afterEach(() => {
  jest.clearAllMocks();
});

describe("PlanItem service", () => {
  describe("togglePlanItem", () => {
    it("do nothing if value is true and planItem exist", async () => {
      const value = true;
      const planId = 1;
      const itemId = 1;
      const planItem = { planId, itemId };

      PlanItemStore.getPlanItem.mockResolvedValue(planItem);
      await PlanItemService.togglePlanItem(planId, itemId, value);
      expect(PlanItemStore.getPlanItem.mock.calls.length).toBe(1);
      expect(PlanItemStore.createPlanItem.mock.calls.length).toBe(0);
      expect(PlanItemStore.deletePlanItem.mock.calls.length).toBe(0);
    });
    it("create plan item if value is true and planItem not exist", async () => {
      const value = true;
      const planId = 1;
      const itemId = 1;
      const planItem = null;

      PlanItemStore.getPlanItem.mockResolvedValue(planItem);
      await PlanItemService.togglePlanItem(planId, itemId, value);

      expect(PlanItemStore.getPlanItem.mock.calls.length).toBe(1);
      expect(PlanItemStore.createPlanItem.mock.calls.length).toBe(1);
      expect(PlanItemStore.deletePlanItem.mock.calls.length).toBe(0);
    });
    it("delete planItem if value is false and planItem exist", async () => {
      const value = false;
      const planId = 1;
      const itemId = 1;
      const planItem = { planId, itemId };

      PlanItemStore.getPlanItem.mockResolvedValue(planItem);
      await PlanItemService.togglePlanItem(planId, itemId, value);
      expect(PlanItemStore.getPlanItem.mock.calls.length).toBe(0);
      expect(PlanItemStore.createPlanItem.mock.calls.length).toBe(0);
      expect(PlanItemStore.deletePlanItem.mock.calls.length).toBe(1);
    });
    it("delete plan item if value is false and planItem not exist", async () => {
      const value = false;
      const planId = 1;
      const itemId = 1;
      const planItem = null;

      PlanItemStore.getPlanItem.mockResolvedValue(planItem);
      await PlanItemService.togglePlanItem(planId, itemId, value);

      expect(PlanItemStore.getPlanItem.mock.calls.length).toBe(0);
      expect(PlanItemStore.createPlanItem.mock.calls.length).toBe(0);
      expect(PlanItemStore.deletePlanItem.mock.calls.length).toBe(1);
    });
  });
});
