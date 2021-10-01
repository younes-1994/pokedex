import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  function (req) {
    return req;
  },
  function (error) {
    return error;
  }
);

axiosInstance.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
