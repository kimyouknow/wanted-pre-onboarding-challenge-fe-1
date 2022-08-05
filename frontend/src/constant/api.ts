export const API_PREFIX = '/api';

export const API_URL = process.env.REACT_APP_SERVER_API + API_PREFIX;

export const API = {
  TODOS: '/todos',
  USER: {
    INDEX: '/users',
    LOGIN: '/user/login',
    SIGNUP: '/user/create',
  },
};
