import Axios from 'libs/axios';
import Helper from 'libs/Helper';

const PlanAPI = {
  /**
    * 取得 plans
    */
  async Plans() {
    try {
      const { data = {} } = await Axios.get('/plans');

      return data;
    } catch (error) {
      Helper.Print('Error: Fail to get plans', error);
      throw error;
    }
  },
};

export default PlanAPI;
