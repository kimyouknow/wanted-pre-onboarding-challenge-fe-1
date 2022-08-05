import { rest } from 'msw';

import { API, API_URL } from '@/constant/api';

import { createTodo, deleteTodo, todoDetail, todoList, updateTodo } from './todo.mock';

const todoHandler = [
  // 전체 할 일 목록조회
  rest.get(API_URL + API.TODOS, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todoList));
  }),
  // id에 해당하는 할 일 디테일 조회
  rest.get(API_URL + API.TODOS + '/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todoDetail));
  }),
  // 할 일 생성
  rest.post(API_URL + API.TODOS + '/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(createTodo));
  }),
  // 할 일 수정
  rest.put(API_URL + API.TODOS + '/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(updateTodo));
  }),
  // 할 일 삭제
  rest.delete(API_URL + API.TODOS + '/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(deleteTodo));
  }),
];

export default todoHandler;
