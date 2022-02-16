/* eslint-disable require-sort/require-sort */
jest.mock("../../libs/db");
jest.mock("../../stores/plan-item");
jest.mock("../../stores/plan");
/**
 * @type jest.Mocked<import('../../stores/plan-item')>
 */
const PlanItemStore = require("../../stores/plan-item");

/**
 * @type jest.Mocked<import('../../stores/plan-item')>
 */
const PlanStore = require("../../stores/plan");

const PlanService = require("../plan");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Plan service", () => {
  describe("deletePlanById", () => {
    it("throw error if plan not found", async () => {
      try {
        const planId = 1;
        const plan = null;
        PlanStore.getNonArchivedPlanById.mockResolvedValue(plan);

        await PlanService.deletePlanById(planId);
      } catch (error) {
        expect(error.message).toBe("Not found plan error");
      }
    });
    it("delete plan, decrease plan order, and delete plan item", async () => {
      const planId = 1;
      const plan = { planId };
      PlanStore.getNonArchivedPlanById.mockResolvedValue(plan);

      await PlanService.deletePlanById(planId);

      expect(PlanStore.archivePlanById.mock.calls.length).toBe(1);
      expect(PlanStore.decreaseOrderGreaterThan.mock.calls.length).toBe(1);
      expect(PlanItemStore.deleteItemsByPlanId.mock.calls.length).toBe(1);
    });
  });
});
