import axios from 'axios';
import config from '../config';
const api = axios.create({
  baseURL: config.baseUrl,
  headers: {},
});
api.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    let message: string = 'Unexpected error';
    if (error.response) {
      message = error.response.data.error.message;
    } else if (error.request) {
      console.log(error, 'error');
    } else {
      message = error;
      console.log(error.request, 'error');
    }
    return Promise.reject(message);
  }
);
export default api;
