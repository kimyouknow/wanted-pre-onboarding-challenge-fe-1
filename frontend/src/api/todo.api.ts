import privateApi from '@/api/instances/privateApi.instance';
import { API } from '@/constant/api';
import { TodoApiType } from '@/types/api.types';

// TODO: 파라미터 및 body로 넘겨줄 인자 설정하기
const todoApi: TodoApiType = {
  getTodoList(config) {
    return privateApi({
      url: API.TODOS,
      method: 'get',
      ...config,
    });
  },
  getTodoDetail(config) {
    return privateApi({
      // url: `${API.TODOS}/${id}`,
      method: 'get',
      ...config,
    });
  },
  createTodo(config) {
    return privateApi({
      url: API.TODOS,
      method: 'post',
      ...config,
    });
  },
  editTodo(id, config) {
    return privateApi({
      url: `${API.TODOS}/${id}`,
      method: 'put',
      ...config,
    });
  },
  deleteTodo(id, config) {
    return privateApi({
      url: `${API.TODOS}/${id}`,
      method: 'delete',
      ...config,
    });
  },
};

export default todoApi;
