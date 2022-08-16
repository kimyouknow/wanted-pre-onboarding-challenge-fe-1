import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useTodoListProviderAction, useTodoListProviderState } from '@/context/TodoList';
import EditTodoForm from '@/pages/Todo/Form/Edit.TodoForm';
import { TodoType } from '@/types/todo.type';

export interface TodoDetailViewProps {
  responseData?: {
    data: TodoType;
  };
}

const TodoDetailView = ({ responseData }: TodoDetailViewProps) => {
  const { handleClickActivateEditFormButton, deleteTarget } = useTodoListProviderAction();
  const { isActivateEditForm } = useTodoListProviderState();
  const todoDetailInfo = responseData?.data;

  // TODO: todoId 상수로 처리하기
  const { todoId } = useParams();

  const handleClickDeleteButton = () => {
    if (todoId) {
      deleteTarget(todoId);
    }
  };

  if (!todoDetailInfo || !todoId) {
    return <div>보여줄 데이터가 없어요</div>;
  }

  // const { title, content } = todoInfo.data;
  const { title, content, id } = todoDetailInfo;

  return (
    <div>
      {isActivateEditForm ? (
        <>
          <EditTodoForm id={id} title={title} content={content} />
          <Button variant="contained" onClick={handleClickActivateEditFormButton}>
            취소
          </Button>
        </>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
          <Button variant="contained" onClick={handleClickActivateEditFormButton}>
            수정
          </Button>
          <Button variant="contained" onClick={handleClickDeleteButton}>
            삭제
          </Button>
        </div>
      )}
    </div>
  );
};

export default TodoDetailView;
