import authInstance from '@/api/instances/auth.instance';
import { API } from '@/constant/api';
import { LoginIngoType, SignUpInfoType } from '@/types/auth';

// TODO: 파라미터 및 body로 넘겨줄 인자 설정하기
const authApi = {
  login({ data }: { data: LoginIngoType }) {
    return authInstance({
      url: API.USER.LOGIN,
      method: 'post',
      data,
    });
  },
  signUp({ data }: { data: SignUpInfoType }) {
    return authInstance({
      url: API.USER.SIGNUP,
      method: 'post',
      data,
    });
  },
};

export default authApi;
