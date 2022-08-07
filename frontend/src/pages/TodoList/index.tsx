import { Route, Routes } from 'react-router-dom';

import TodoListProvider, {
  useTodoListProviderAction,
  useTodoListProviderState,
} from '@/context/TodoList';
import WithProvider from '@/hoc/WithProvider';

import * as S from './style';
import TodoDetail from './TodoDetail';
import TodoElement from './TodoElement';

const Todos = () => {
  const { todoList, isLoading, apiError } = useTodoListProviderState();
  const { changeTargetTodoId } = useTodoListProviderAction();

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (apiError.isError) {
    return (
      <div>
        <h3>{apiError.msg}</h3>
        {/* TODO: 에러 발생시 다시 요청하는 로직  */}
        <button onClick={() => {}}>다시 요청</button>
      </div>
    );
  }

  return (
    <S.Container>
      {todoList.length === 0 ? (
        <div>할 일 목록이 없네요!</div>
      ) : (
        <ul>
          {todoList.map(({ id, ...todoInfo }) => (
            <TodoElement key={id} todoInfo={{ ...todoInfo, id }} />
          ))}
        </ul>
      )}
      <Routes>
        <Route path="/:todoId/" element={<TodoDetail />} />
      </Routes>
    </S.Container>
  );
};

export default WithProvider({ Provider: TodoListProvider, Component: Todos });
