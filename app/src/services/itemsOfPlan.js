import Axios from 'libs/axios';
import Helper from 'libs/Helper';

const ItemsOfPlanAPI = {
  /**
    * 取得 plan 的 items
    */
  async ItemsOfPlan() {
    try {
      const { data = {} } = await Axios.get('/itemsOfPlan');

      return data;
    } catch (error) {
      Helper.Print('Error: Fail to get items of plan', error);
      throw error;
    }
  },
};

export default ItemsOfPlanAPI;
