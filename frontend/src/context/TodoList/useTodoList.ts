import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import todoApi from '@/api/todo.api';
import { ROUTE } from '@/constant/route';
import { useToastNotificationAction } from '@/context/ToastNotification';
import { notifyNewMessage } from '@/context/ToastNotification/action';
import { TodoInfoType, TodoType } from '@/types/todo.type';

export type TodoListStateType = {
  todoList: TodoType[];
  todoDetailInfo: TodoType | null;
  targetTodoId: string;
  isActivateCreateForm: boolean;
  isActivateEditForm: boolean;
};

export type TodoListActionType = {
  changeTargetTodoId: (targetId: string) => void;
  handleClickTodoElement: (targetId: string) => void;
  handleClickActivateCreateFormButton: () => void;
  handleClickActivateEditFormButton: () => void;
  updateAllTodoList: (todoList: TodoType[]) => void;
  deleteTarget: (targetId: string) => void;
  createTodo: (submitData: TodoInfoType) => Promise<void>;
  editTodo: (submitData: TodoInfoType) => Promise<void>;
};

export const todoInitState = {
  todoList: [],
  todoDetailInfo: null,
  targetTodoId: '',
  isActivateCreateForm: false,
  isActivateEditForm: false,
};

const useTodoList = () => {
  const navigate = useNavigate();
  const notifyDispatch = useToastNotificationAction();
  const [isActivateCreateForm, setIsActivateCreateForm] = useState(
    todoInitState.isActivateCreateForm,
  );
  const [todoList, setTodoList] = useState<TodoType[]>(todoInitState.todoList);
  const [todoDetailInfo, setTodoDetailInfo] = useState(todoInitState.todoDetailInfo);
  const [isActivateEditForm, setIsActivateEditForm] = useState(todoInitState.isActivateEditForm);
  const [targetTodoId, setTargetTodoId] = useState<string>(todoInitState.targetTodoId);

  const updateAllTodoList = (newTodoList: TodoType[]) => {
    setTodoList(newTodoList);
  };

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

  const handleClickTodoElement = (targetId: string) => {
    changeTargetTodoId(targetId);
    navigate(`${ROUTE.TODO}/${targetId}`);
  };

  const createTodo = async (submitData: TodoInfoType) => {
    // TODO: 1초가 넘으면 처리중입니다 메세지 보여지게 수정
    notifyNewMessage(notifyDispatch, '처리 중입니다...', 'Info');
    try {
      await todoApi.createTodo({ data: submitData });
      notifyNewMessage(notifyDispatch, '작성 성공', 'Success');
    } catch (error) {
      notifyNewMessage(notifyDispatch, '작성 과정에서 에러가 발생했습니다', 'Error');
    }
  };

  const editTodo = async (submitData: TodoInfoType) => {
    // TODO: 1초가 넘으면 처리중입니다 메세지 보여지게 수정
    notifyNewMessage(notifyDispatch, '처리 중입니다...', 'Info');
    try {
      await todoApi.editTodo(targetTodoId, { data: submitData });
      notifyNewMessage(notifyDispatch, '작성 성공', 'Success');
    } catch (error: any) {
      notifyNewMessage(notifyDispatch, error, 'Error');
    }
  };

  const deleteTarget = async (targetId: string) => {
    // TODO: 1초가 넘으면 처리중입니다 메세지 보여지게 수정
    notifyNewMessage(notifyDispatch, '처리 중입니다...', 'Info');
    try {
      await todoApi.deleteTodo(targetId);
      notifyNewMessage(notifyDispatch, '삭제 성공!', 'Success');
    } catch (error) {
      notifyNewMessage(notifyDispatch, '삭제 과정에서 에러가 발생했습니다', 'Error');
    }
  };

  const states = useMemo(
    () => ({
      todoList,
      todoDetailInfo,
      targetTodoId,
      isActivateCreateForm,
      isActivateEditForm,
    }),
    [todoList, todoDetailInfo, targetTodoId, isActivateCreateForm, isActivateEditForm],
  );

  const actions = useMemo(
    () => ({
      changeTargetTodoId,
      handleClickTodoElement,
      handleClickActivateCreateFormButton,
      handleClickActivateEditFormButton,
      updateAllTodoList,
      deleteTarget,
      createTodo,
      editTodo,
    }),
    [
      changeTargetTodoId,
      handleClickTodoElement,
      handleClickActivateCreateFormButton,
      handleClickActivateEditFormButton,
      updateAllTodoList,
      deleteTarget,
      createTodo,
      editTodo,
    ],
  );

  return {
    states,
    actions,
  };
};

export default useTodoList;
