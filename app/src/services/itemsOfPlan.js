import Axios from 'libs/axios';
import Helper from 'libs/Helper';

const ItemsOfPlanAPI = {
  /**
    * εεΎ plan η items
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
