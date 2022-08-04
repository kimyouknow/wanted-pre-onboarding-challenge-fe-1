import apiInstance from '@/api/instances/api.Instance';
import { API } from '@/constant/api';

const todosApi = {
  getTodoList() {
    return apiInstance({
      url: API.TODOS,
      method: 'get',
    });
  },
  getTodoDetail(id: string) {
    return apiInstance({
      url: `${API.TODOS}/${id}`,
      method: 'get',
    });
  },
  createTodo(id: string) {
    return apiInstance({
      url: `${API.TODOS}/${id}`,
      method: 'post',
    });
  },
  editTodo(id: string) {
    return apiInstance({
      url: `${API.TODOS}/${id}`,
      method: 'put',
    });
  },
  deleteTodo(id: string) {
    return apiInstance({
      url: `${API.TODOS}/${id}`,
      method: 'delete',
    });
  },
};

export default todosApi;
