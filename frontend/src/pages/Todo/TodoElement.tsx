import { useTodoListProviderAction } from '@/context/TodoList';
import { TodoType } from '@/types/todo.type';

import * as S from './style';

interface TodoElementProps {
  todoInfo: TodoType;
}

const TodoElement = ({ todoInfo }: TodoElementProps) => {
  const { id: todoId, content, title } = todoInfo;
  const { handleClickTodoElement } = useTodoListProviderAction();
  return (
    <S.TodoElement onClick={() => handleClickTodoElement(todoId)}>
      <h2>{title}</h2>
    </S.TodoElement>
  );
};

export default TodoElement;