import { Button } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import todoApi from '@/api/todo.api';
import TodoListProvider, {
  useTodoListProviderAction,
  useTodoListProviderState,
} from '@/context/TodoList';
import WithLoading from '@/hoc/WithLoading';
import WithProvider from '@/hoc/WithProvider';
import useFetch from '@/hooks/useFetch';
import CreateTodoForm from '@/pages/Todo/Form/Create.TodoForm';
import { TodoListResponseType } from '@/types/todo.type';

import * as S from './style';
import TodoDetail from './TodoDetail';
import TodoListView, { TodoListViewProps } from './TodoList.view';

const Todo = () => {
  const { isActivateCreateForm } = useTodoListProviderState();
  const { handleClickActivateCreateFormButton } = useTodoListProviderAction();
  const { apiState, execution, forceRefetch } = useFetch({ axiosInstance: todoApi.getTodoList });
  const TodoListWithLoading = WithLoading<TodoListViewProps, TodoListResponseType>({
    apiState,
    execution,
    Component: TodoListView,
  });
  return (
    <S.Container>
      {isActivateCreateForm && <CreateTodoForm />}
      <Button variant="contained" onClick={handleClickActivateCreateFormButton}>
        {isActivateCreateForm ? '취소' : '+'}
      </Button>
      <S.TodoList>
        <TodoListWithLoading />
        <Routes>
          <Route path=":todoId" element={<TodoDetail />} />
        </Routes>
      </S.TodoList>
    </S.Container>
  );
};

export default WithProvider({ Provider: TodoListProvider, Component: Todo });
