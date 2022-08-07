import { Button } from '@mui/material';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import todoApi from '@/api/todo.api';
import { useToastNotificationAction } from '@/context/ToastNotification';
import { notifyNewMessage } from '@/context/ToastNotification/action';
import { useTodoListProviderAction, useTodoListProviderState } from '@/context/TodoList';
import EditTodoForm from '@/pages/Todo/Form/Edit.TodoForm';
import { TodoDetailResponseType, TodoType } from '@/types/todo.type';

const TodoDetail = () => {
  const { isActivateEditForm } = useTodoListProviderState();
  const { handleClickActivateEditFormButton, deleteTarget } = useTodoListProviderAction();

  // TODO: todoId 상수로 처리하기
  const { todoId } = useParams();
  const [todoInfo, setTodoInfo] = useState<TodoType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState({ isError: false, msg: '' });

  const handleClickDeleteButton = () => {
    if (todoId) {
      deleteTarget(todoId);
    }
  };

  const getTodoDetail = async (id: string) => {
    setIsLoading(true);
    try {
      const response: AxiosResponse<TodoDetailResponseType> = await todoApi.getTodoDetail(id);
      // TODO: 데이터 파싱 interceptor에서 하는 걸로 수정하기
      setTodoInfo(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setApiError({
        isError: true,
        msg: '데이터 요청 중에 에러 발생',
      });
    }
  };

  useEffect(() => {
    if (todoId) {
      getTodoDetail(todoId);
    }
  }, []);

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

  if (!todoInfo || !todoId) {
    return <div>보여줄 데이터가 없어요</div>;
  }

  const { title, content } = todoInfo;

  return (
    <div>
      <h2>할 일 상세 정보</h2>
      {isActivateEditForm ? (
        <>
          <EditTodoForm id={todoId} title={title} content={content} />
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

export default TodoDetail;
