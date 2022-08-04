import axios, { AxiosInstance } from 'axios';

import { API_URL } from '@/constant/api';

const apiInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
  headers: {},
});

export default apiInstance;
