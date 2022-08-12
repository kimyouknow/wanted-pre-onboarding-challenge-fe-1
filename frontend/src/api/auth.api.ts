import authInstance from '@/api/instances/auth.instance';
import { API } from '@/constant/api';
import { AuthApiType } from '@/types/api.types';

// TODO: 파라미터 및 body로 넘겨줄 인자 설정하기
const authApi: AuthApiType = {
  login({ data }) {
    return authInstance({
      url: API.USER.LOGIN,
      method: 'post',
      data,
    });
  },
  signUp({ data }) {
    return authInstance({
      url: API.USER.SIGNUP,
      method: 'post',
      data,
    });
  },
};

export default authApi;
