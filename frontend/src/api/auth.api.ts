import publicApi from '@/api/instances/publicApi.instance';
import { API } from '@/constant/api';
import { AuthApiType } from '@/types/api.types';

// TODO: 파라미터 및 body로 넘겨줄 인자 설정하기
const authApi: AuthApiType = {
  login({ data }) {
    return publicApi({
      url: API.USER.LOGIN,
      method: 'post',
      data,
    });
  },
  signUp({ data }) {
    return publicApi({
      url: API.USER.SIGNUP,
      method: 'post',
      data,
    });
  },
};

export default authApi;
