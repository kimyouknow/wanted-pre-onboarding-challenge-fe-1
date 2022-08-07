import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import todoApi from '@/api/todo.api';
import { TodoResponseType, TodoType } from '@/types/todo.type';

export type TodoListStateType = {
  todoList: TodoType[];
  isLoading: boolean;
  apiError: { isError: boolean; msg: string };
};

export type TodoListActionType = {
  changeTargetTodoId: (targetId: string) => void;
};

export const tooInitState = {
  targetTodoId: null,
  todoList: [],
  isLoading: true,
  apiError: { isError: false, msg: '' },
};

const useTodoList = () => {
  const [targetTodoId, setTargetTodoId] = useState<string | null>(tooInitState.targetTodoId);
  const [todoList, setTodoList] = useState<TodoType[]>(tooInitState.todoList);
  const [isLoading, setIsLoading] = useState(tooInitState.isLoading);
  const [apiError, setApiError] = useState(tooInitState.apiError);

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
