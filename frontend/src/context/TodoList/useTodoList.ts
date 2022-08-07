import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import todoApi from '@/api/todo.api';
import { ROUTE } from '@/constant/route';
import { TodoListResponseType, TodoType } from '@/types/todo.type';

export type TodoListStateType = {
  todoList: TodoType[];
  isLoading: boolean;
  apiError: { isError: boolean; msg: string };
  targetTodoId: string;
  isActivateCreateForm: boolean;
};

export type TodoListActionType = {
  changeTargetTodoId: (targetId: string) => void;
  handleClickTodoElement: (targetId: string) => void;
  showCreateForm: () => void;
  hideCreateForm: () => void;
  handleClickActivateCreateFormButton: () => void;
};

export const tooInitState = {
  isActivateCreateForm: false,
  targetTodoId: '',
  todoList: [],
  isLoading: true,
  apiError: { isError: false, msg: '' },
};

const useTodoList = () => {
  const navigate = useNavigate();
  const [isActivateCreateForm, setIsActivateCreateForm] = useState(
    tooInitState.isActivateCreateForm,
  );
  const [targetTodoId, setTargetTodoId] = useState<string>(tooInitState.targetTodoId);
  const [todoList, setTodoList] = useState<TodoType[]>(tooInitState.todoList);
  const [isLoading, setIsLoading] = useState(tooInitState.isLoading);
  const [apiError, setApiError] = useState(tooInitState.apiError);

  const showCreateForm = () => {
    setIsActivateCreateForm(true);
  };

  const hideCreateForm = () => {
    setIsActivateCreateForm(false);
  };

  const handleClickActivateCreateFormButton = () => {
    setIsActivateCreateForm(prev => !prev);
  };

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
      const response: AxiosResponse<TodoListResponseType> = await todoApi.getTodoList();
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

  // const getTodoDetail = (todoId: string) => todoApi.getTodoDetail(todoId);

  useEffect(() => {
    getTodoList();
  }, []);

  return {
    isActivateCreateForm,
    todoList,
    isLoading,
    apiError,
    targetTodoId,
    changeTargetTodoId,
    handleClickTodoElement,
    showCreateForm,
    hideCreateForm,
    handleClickActivateCreateFormButton,
  };
};

export default useTodoList;
