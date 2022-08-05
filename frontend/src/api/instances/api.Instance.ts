import axios, { AxiosInstance } from 'axios';

import { API_URL } from '@/constant/api';

// TODO: headers에 토큰 지정하기
const apiInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
  headers: {},
});

export default apiInstance;
