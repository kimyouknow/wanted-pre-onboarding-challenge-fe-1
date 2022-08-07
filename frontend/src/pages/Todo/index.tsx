import { Route, Routes } from 'react-router-dom';

import TodoListProvider, {
  useTodoListProviderAction,
  useTodoListProviderState,
} from '@/context/TodoList';
import WithProvider from '@/hoc/WithProvider';
import CreateTodoForm from '@/pages/Todo/Form/Create.TodoForm';

import * as S from './style';
import TodoDetail from './TodoDetail';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <S.Container>
      <CreateTodoForm />
      <S.TodoList>
        <TodoList />
        <Routes>
          <Route path="/:todoId/" element={<TodoDetail />} />
        </Routes>
      </S.TodoList>
    </S.Container>
  );
};

export default WithProvider({ Provider: TodoListProvider, Component: Todo });
