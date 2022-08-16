import { useTodoListProviderAction } from '@/context/TodoList';
import { TodoType } from '@/types/todo.type';

import TodoElement from './TodoElement';

export interface TodoListProps {
  responseData?: {
    data: TodoType[];
  };
}

const TodoList = ({ responseData }: TodoListProps) => {
  const { updateAllTodoList } = useTodoListProviderAction();
  const todoList = responseData?.data;

  if (!todoList || todoList.length === 0) {
    return <div>할 일 목록이 없네요!</div>;
  }
  updateAllTodoList(todoList);

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
