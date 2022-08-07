import axios, { AxiosInstance } from 'axios';

import { API_URL } from '@/constant/api';

import { errorHandler, successHandler } from './responseHandler';

const authInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
  headers: {},
});

authInstance.interceptors.response.use(successHandler, errorHandler);

export default authInstance;
