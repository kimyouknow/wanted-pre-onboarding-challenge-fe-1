import { useParams } from 'react-router-dom';

import todoApi from '@/api/todo.api';
import { API } from '@/constant/api';
import WithLoading from '@/hoc/WithLoading';
import useFetch from '@/hooks/useFetch';
import TodoDetailView, { TodoDetailViewProps } from '@/pages/Todo/TodoDetail.view';
import { TodoDetailResponseType } from '@/types/todo.type';

const TodoDetail = () => {
  // TODO: todoId 상수로 처리하기
  const { todoId } = useParams();
  const { apiState, execution, forceRefetch } = useFetch({
    axiosInstance: todoApi.getTodoDetail,
    axiosConfig: {
      url: `${API.TODOS}/${todoId}`,
    },
  });
  const TodoListWithLoading = WithLoading<TodoDetailViewProps, TodoDetailResponseType>({
    apiState,
    execution,
    Component: TodoDetailView,
  });
  return (
    <div>
      <h2>할 일 상세 정보</h2>
      <TodoListWithLoading />
    </div>
  );
};

export default TodoDetail;
