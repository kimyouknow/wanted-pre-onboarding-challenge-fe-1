import { useTodoListProviderState } from '@/context/TodoList';

import TodoElement from './TodoElement';

const TodoList = () => {
  const { todoList, isLoading, apiError } = useTodoListProviderState();

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

  if (todoList.length === 0) {
    return <div>할 일 목록이 없네요!</div>;
  }

  return (
    <ul>
      {todoList.map(({ id, ...todoInfo }) => (
        <TodoElement key={id} todoInfo={{ ...todoInfo, id }} />
      ))}
    </ul>
  );
};

export default TodoList;
