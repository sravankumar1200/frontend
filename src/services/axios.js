import axios from 'axios';

axios.defaults.withCredentials = true

const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
       
    },
});
export default instance;