import axios from 'axios';

export default (config = {}) => {
  let baseUrl = '';
  const client =
    config && config.useBlob ?
      axios.create({
        timeout: 10000,
        baseUrl,
        responseType: 'blob',
        withCredentials: true
      }) :
      axios.create({
        timeout: 10000,
        baseUrl,
        withCredentials: true
      });
  const onRequestSuccess = async (req) => {
    if (req) {
      const token = await getAuthToken();
      if (token) {
        req.headers.Authorization = 'Bear ' + token;
      }
      return req;
    }
  }
  function errorResHandler(err) {
    if (err.response && err.response.status === 401) {
      toastr.error('Not Authorized');
    }
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