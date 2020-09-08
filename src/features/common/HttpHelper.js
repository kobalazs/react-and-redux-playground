import Axios from 'axios';

let http;

const createAxiosInstance = () => {
  const axiosInstance = Axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    timeout: process.env.REACT_APP_HTTP_TIMEOUT
  });

  axiosInstance.interceptors.response.use(
    response => response,
    err => {
      if (['token_invalid', 'token_expired'].includes(err.response?.data?.error)) {
        window.alert('Authentication error, please log in again!');
      }
      throw err;
    },
  );

  return axiosInstance;
}

export default (token) => {
  if (!http) {
    http = createAxiosInstance();
  }

  // Token can change at any time, so we need to update it for every call!
  http.defaults.headers.common.Authorization = `Bearer ${token}`;
  http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

  return http;
};
