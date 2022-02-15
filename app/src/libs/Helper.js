import { ENV } from 'constants/config';
import _ from 'lodash';

const Helper = {
  /**
    * @param {string} title
    * @param {Array|Object|string} log
    */
  Print: (title, log = []) => {
    if (ENV.isDev) {
      const logs = _.isArray(log) ? log : [log];
      console.group(`${title}`);
      logs.forEach((el) => console.log(el));
      console.groupEnd();
      console.log('\n');
    }
  },
};

export default Helper;
