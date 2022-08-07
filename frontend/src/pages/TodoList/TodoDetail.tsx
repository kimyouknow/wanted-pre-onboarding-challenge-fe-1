import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import todoApi from '@/api/todo.api';
import { TodoDetailResponseType, TodoType } from '@/types/todo.type';

const TodoDetail = () => {
  // TODO: todoId 상수로 처리하기
  const { todoId } = useParams();
  const [todoInfo, setTodoInfo] = useState<TodoType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState({ isError: false, msg: '' });

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

  if (!todoInfo) {
    return <div>보여줄 데이터가 없어요</div>;
  }

  const { title, content } = todoInfo;

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default TodoDetail;
