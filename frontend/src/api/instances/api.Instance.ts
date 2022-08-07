import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { API_URL } from '@/constant/api';
import { ACCESS_TOKEN } from '@/constant/auth';
import { handleLocalStorage } from '@/utils/localstorage';

// TODO: headers에 토큰 지정하기
const apiInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
  headers: {},
});

const setAcessTokenInRequestConfig = (config: AxiosRequestConfig) => {
  const accessToken = handleLocalStorage.get(ACCESS_TOKEN);
  if (!config?.headers || !!accessToken) {
    return config;
  }
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

apiInstance.interceptors.request.use(
  config => {
    const newConfig = setAcessTokenInRequestConfig(config);
    return newConfig;
  },
  error => {
    console.error(error);
    return Promise.reject(new Error('요청 에러 발생'));
  },
);

export default apiInstance;
