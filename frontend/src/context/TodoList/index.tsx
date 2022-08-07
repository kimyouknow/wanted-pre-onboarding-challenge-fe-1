import { createContext, useMemo, useContext, ReactNode } from 'react';

import useTodoList, { TodoListActionType, TodoListStateType, todoInitState } from './useTodoList';

const ToastNotificationStateContext = createContext<TodoListStateType>(todoInitState);
const ToastNotificationActionContext = createContext<TodoListActionType | null>(null);

interface TodoListProviderProps {
  children: ReactNode;
}

const TodoListProvider = ({ children }: TodoListProviderProps) => {
  const {
    todoList,
    targetTodoId,
    isLoading,
    apiError,
    isActivateCreateForm,
    isActivateEditForm,
    changeTargetTodoId,
    handleClickTodoElement,
    handleClickActivateCreateFormButton,
    handleClickActivateEditFormButton,
  } = useTodoList();

  const states = useMemo(
    () => ({
      todoList,
      isLoading,
      apiError,
      targetTodoId,
      isActivateCreateForm,
      isActivateEditForm,
    }),
    [todoList, isLoading, apiError, targetTodoId, isActivateCreateForm, isActivateEditForm],
  );

  const actions = useMemo(
    () => ({
      changeTargetTodoId,
      handleClickTodoElement,
      handleClickActivateCreateFormButton,
      handleClickActivateEditFormButton,
    }),
    [
      changeTargetTodoId,
      handleClickTodoElement,
      handleClickActivateCreateFormButton,
      handleClickActivateEditFormButton,
    ],
  );

  return (
    <ToastNotificationStateContext.Provider value={states}>
      <ToastNotificationActionContext.Provider value={actions}>
        {children}
      </ToastNotificationActionContext.Provider>
    </ToastNotificationStateContext.Provider>
  );
};

export const useTodoListProviderState = () => {
  const states = useContext(ToastNotificationStateContext);
  if (states === undefined) {
    throw new Error('useTodoListProviderState should be used within TodoListProvider');
  }
  return states;
};

export const useTodoListProviderAction = () => {
  const dispatch = useContext(ToastNotificationActionContext);

  if (!dispatch) {
    throw new Error('useTodoListProviderState must be used within TodoListProvider');
  }

  return dispatch;
};

export default TodoListProvider;
