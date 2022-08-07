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
  isActivateEditForm: boolean;
};

export type TodoListActionType = {
  changeTargetTodoId: (targetId: string) => void;
  handleClickTodoElement: (targetId: string) => void;
  handleClickActivateCreateFormButton: () => void;
  handleClickActivateEditFormButton: () => void;
};

export const todoInitState = {
  todoList: [],
  isLoading: true,
  apiError: { isError: false, msg: '' },
  targetTodoId: '',
  isActivateCreateForm: false,
  isActivateEditForm: false,
};

const useTodoList = () => {
  const navigate = useNavigate();
  const [isActivateCreateForm, setIsActivateCreateForm] = useState(
    todoInitState.isActivateCreateForm,
  );
  const [isActivateEditForm, setIsActivateEditForm] = useState(todoInitState.isActivateEditForm);
  const [targetTodoId, setTargetTodoId] = useState<string>(todoInitState.targetTodoId);
  const [todoList, setTodoList] = useState<TodoType[]>(todoInitState.todoList);
  const [isLoading, setIsLoading] = useState(todoInitState.isLoading);
  const [apiError, setApiError] = useState(todoInitState.apiError);

  const handleClickActivateCreateFormButton = () => {
    setIsActivateCreateForm(prev => !prev);
    // form은 하나씩 화면에 표시되게 하기
    setIsActivateEditForm(false);
  };

  const handleClickActivateEditFormButton = () => {
    setIsActivateEditForm(prev => !prev);
    // form은 하나씩 화면에 표시되게 하기
    setIsActivateCreateForm(false);
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
    todoList,
    isLoading,
    apiError,
    targetTodoId,
    isActivateCreateForm,
    isActivateEditForm,
    changeTargetTodoId,
    handleClickTodoElement,
    handleClickActivateCreateFormButton,
    handleClickActivateEditFormButton,
  };
};

export default useTodoList;
