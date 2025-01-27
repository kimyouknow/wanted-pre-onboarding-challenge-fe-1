import apiInstance from '@/api/instances/api.Instance';
import { API } from '@/constant/api';
import { TodoInfoType, TodoRequestType } from '@/types/todo.type';

// TODO: 파라미터 및 body로 넘겨줄 인자 설정하기
const todoApi = {
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
  createTodo(data: TodoInfoType) {
    return apiInstance({
      url: API.TODOS,
      method: 'post',
      data,
    });
  },
  editTodo({ id, data }: TodoRequestType) {
    return apiInstance({
      url: `${API.TODOS}/${id}`,
      method: 'put',
      data,
    });
  },
  deleteTodo(id: string) {
    return apiInstance({
      url: `${API.TODOS}/${id}`,
      method: 'delete',
    });
  },
};

export default todoApi;
