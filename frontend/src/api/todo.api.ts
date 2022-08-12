import apiInstance from '@/api/instances/api.Instance';
import { API } from '@/constant/api';
import { TodoApiType } from '@/types/api.types';

// TODO: 파라미터 및 body로 넘겨줄 인자 설정하기
const todoApi: TodoApiType = {
  getTodoList(config) {
    return apiInstance({
      url: API.TODOS,
      method: 'get',
      ...config,
    });
  },
  // FIXME: 통일성있게 바꾸기
  getTodoDetail(id, config) {
    return apiInstance({
      url: `${API.TODOS}/${id}`,
      method: 'get',
      ...config,
    });
  },
  createTodo(config) {
    return apiInstance({
      url: API.TODOS,
      method: 'post',
      ...config,
    });
  },
  editTodo(id, config) {
    return apiInstance({
      url: `${API.TODOS}/${id}`,
      method: 'put',
      ...config,
    });
  },
  deleteTodo(id, config) {
    return apiInstance({
      url: `${API.TODOS}/${id}`,
      method: 'delete',
      ...config,
    });
  },
};

export default todoApi;
