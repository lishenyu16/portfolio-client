import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

let baseUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3003';
axios.defaults.baseURL = baseUrl;

export default (config = {}) => {
  const client =
    config && config.useBlob ?
      axios.create({
        timeout: 10000,
        //baseUrl,
        responseType: 'blob',
        withCredentials: process.env.NODE_ENV === 'production',
      }) :
      axios.create({
        timeout: 10000,
        //baseUrl,
        withCredentials: process.env.NODE_ENV === 'production',
      });
  const onRequestSuccess = (req) => {
    if (req) {
      const token = Cookies.get('auth_token');
      if (token) {
        req.headers.Authorization = 'Bear ' + token;
      }
      return req;
    }
  }
  function errorResHandler(err) {
    // if (err.response && err.response.status === 401) {
    //   toast.error('Not Authorized');
    // }
    if (err.response) {
      return Promise.reject(err.response);
    }
    throw err;
  }

  client.interceptors.request.use(onRequestSuccess);
  client.interceptors.response.use(res => res, errorResHandler);
  return client;
}

//example usage: axios().post('/balaba', {payload});