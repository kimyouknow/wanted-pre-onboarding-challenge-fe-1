import { rest } from 'msw';

import { API, API_URL } from '@/constant/api';

import { signUpMessage, loginMessage } from './auth.mock';

const todoHandler = [
  // 유저 회원가입
  rest.post(API_URL + API.USER.SIGNUP, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(loginMessage.success));
  }),
  // 유저 로그인
  rest.post(API_URL + API.USER.LOGIN, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(signUpMessage.success));
  }),
];

export default todoHandler;
