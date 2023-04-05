import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
let loading = 0;
const showLoading = () => {
  if (loading === 0) {
    // Show the loading indicator
  }
  loading++;
};

const hideLoading = () => {
  if (loading > 0) {
    loading--;
  }
  if (loading === 0) {
    // Hide the loading indicator
  }
};

const axiosCustom = axios.create({
  baseURL: `${process.env.API_URL}/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosCustom.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    showLoading();
    return config;
  },
  function (error) {
    hideLoading();
    return Promise.reject(error);
  }
);

axiosCustom.interceptors.response.use(
  function (response: AxiosResponse) {
    hideLoading();
    return response.data;
  },
  function (error) {
    hideLoading();
    return Promise.reject(error);
  }
);

// Add a response interceptor
// axiosCustom.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response.data;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

export default axiosCustom;
