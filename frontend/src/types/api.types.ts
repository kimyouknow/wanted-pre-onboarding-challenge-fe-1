import { AxiosPromise } from 'axios';

import { AuthResponseType, LoginInfoType, SignUpInfoType } from './auth.type';

// TODO: responsehandler에서 response.data를 파싱하려고했지만 AxiosResponse의 기본 형태때문에 못함
// export type CustomPromise<T = any> = AxiosPromise<T>;
// export interface CustomResponseType<T = any> {}

export interface AuthApiType {
  login: ({ data }: { data: LoginInfoType }) => AxiosPromise<AuthResponseType>;
  signUp: ({ data }: { data: SignUpInfoType }) => AxiosPromise<AuthResponseType>;
}
