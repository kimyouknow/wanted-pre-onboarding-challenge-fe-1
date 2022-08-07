import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import todoApi from '@/api/todo.api';
import { TodoResponseType, TodoType } from '@/types/todo.type';

const useTodoList = () => {
  const [targetTodoId, setTargetTodoId] = useState<string | null>(null);
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState({
    isError: false,
    msg: '',
  });

  const changeTargetTodoId = (targetId: string) => {
    setTargetTodoId(targetId);
  };

  const getTodoList = async () => {
    setIsLoading(true);
    try {
      const response: AxiosResponse<TodoResponseType> = await todoApi.getTodoList();
      // TODO: 데이터 파싱 interceptor에서 하는 걸로 수정하기
      setTodoList(response.data.data);
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
    getTodoList();
  }, []);

  return { todoList, isLoading, apiError, targetTodoId, changeTargetTodoId };
};

export default useTodoList;
