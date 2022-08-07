import useTodoList from '@/pages/Todos/useTodoList';

const Todos = () => {
  const { todoList, isLoading, apiError } = useTodoList();

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (apiError.isError) {
    return (
      <div>
        <h3>{apiError.msg}</h3>
        <button onClick={() => {}}>다시 요청</button>
      </div>
    );
  }

  return (
    <div>
      {todoList.length === 0 ? (
        <div>할 일 목록이 없네요!</div>
      ) : (
        <ul>
          {todoList.map(element => (
            <li key={element.id}>123</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
