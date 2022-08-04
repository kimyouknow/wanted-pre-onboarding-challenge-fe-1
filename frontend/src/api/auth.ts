import authInstance from '@/api/instances/auth.instance';
import { API } from '@/constant/api';

// TODO: 파라미터 및 body로 넘겨줄 인자 설정하기
const authApi = {
  login() {
    return authInstance({
      url: API.USER.LOGIN,
      method: 'post',
    });
  },
  signUp() {
    return authInstance({
      url: API.USER.SIGNUP,
      method: 'post',
    });
  },
};

export default authApi;
