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
import TodoList, { TodoListProps } from './TodoList';

const Todo = () => {
  const { isActivateCreateForm } = useTodoListProviderState();
  const { updateAllTodoList, handleClickActivateCreateFormButton } = useTodoListProviderAction();
  const { apiState, execution, forceRefetch } = useFetch({ axiosInstance: todoApi.getTodoList });
  const TodoListWithLoading = WithLoading<TodoListProps, TodoListResponseType>({
    apiState,
    execution,
    Component: TodoList,
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
