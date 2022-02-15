import Config from 'constants/config';
import Axios from 'axios';

Axios.defaults.withCredentials = true;
Axios.defaults.baseURL = Config.BASE_URL;

export default Axios;
