import { Route, Routes } from 'react-router-dom';

import TodoDetail from '@/pages/TodoList/TodoDetail';
import useTodoList from '@/pages/TodoList/useTodoList';

import * as S from './style';

const Todos = () => {
  const { todoList, isLoading, apiError, changeTargetTodoId } = useTodoList();

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
          {todoList.map(({ id }) => (
            <li key={id} onClick={() => changeTargetTodoId(id)}>
              123
            </li>
          ))}
        </ul>
      )}
      <Routes>
        <Route path="/:todoId/" element={<TodoDetail />} />
      </Routes>
    </S.Container>
  );
};

export default Todos;
