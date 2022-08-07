import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import todoApi from '@/api/todo.api';
import { ROUTE } from '@/constant/route';
import { TodoResponseType, TodoType } from '@/types/todo.type';

export type TodoListStateType = {
  todoList: TodoType[];
  isLoading: boolean;
  apiError: { isError: boolean; msg: string };
};

export type TodoListActionType = {
  changeTargetTodoId: (targetId: string) => void;
  handleClickTodoElement: (targetId: string) => void;
};

export const tooInitState = {
  targetTodoId: '',
  todoList: [],
  isLoading: true,
  apiError: { isError: false, msg: '' },
};

const useTodoList = () => {
  const navigate = useNavigate();
  const [targetTodoId, setTargetTodoId] = useState<string>(tooInitState.targetTodoId);
  const [todoList, setTodoList] = useState<TodoType[]>(tooInitState.todoList);
  const [isLoading, setIsLoading] = useState(tooInitState.isLoading);
  const [apiError, setApiError] = useState(tooInitState.apiError);

  const changeTargetTodoId = (targetId: string) => {
    setTargetTodoId(targetId);
  };

  const handleClickTodoElement = (todoId: string) => {
    changeTargetTodoId(todoId);
    navigate(`${ROUTE.TODO}/${todoId}`);
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

  return {
    todoList,
    isLoading,
    apiError,
    targetTodoId,
    changeTargetTodoId,
    handleClickTodoElement,
  };
};

export default useTodoList;
