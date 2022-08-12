import { useTodoListProviderState } from '@/context/TodoList';

import TodoElement from './TodoElement';

const TodoList = () => {
  const { todoList } = useTodoListProviderState();

  // if (isLoading) {
  //   return <div>로딩중...</div>;
  // }

  // if (apiError.isError) {
  //   return (
  //     <div>
  //       <h3>{apiError.msg}</h3>
  //       {/* TODO: 에러 발생시 다시 요청하는 로직  */}
  //       <button onClick={() => {}}>다시 요청</button>
  //     </div>
  //   );
  // }

  // const todoList = responseData?.data;

  if (!todoList || todoList.length === 0) {
    return <div>할 일 목록이 없네요!</div>;
  }

  return (
    <div>
      <h2>할 일 목록</h2>
      <ul>
        {todoList.map(({ id, ...todoInfo }) => (
          <TodoElement key={id} todoInfo={{ ...todoInfo, id }} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
