import { createContext, useMemo, useContext, ReactNode } from 'react';

import useTodoList, { TodoListActionType, TodoListStateType, tooInitState } from './useTodoList';

const ToastNotificationStateContext = createContext<TodoListStateType>(tooInitState);
const ToastNotificationActionContext = createContext<TodoListActionType | null>(null);

interface TodoListProviderProps {
  children: ReactNode;
}

const TodoListProvider = ({ children }: TodoListProviderProps) => {
  const {
    isActivateCreateForm,
    todoList,
    targetTodoId,
    isLoading,
    apiError,
    changeTargetTodoId,
    handleClickTodoElement,
    showCreateForm,
    hideCreateForm,
    handleClickActivateCreateFormButton,
  } = useTodoList();

  const states = useMemo(
    () => ({ isActivateCreateForm, todoList, isLoading, apiError, targetTodoId }),
    [isActivateCreateForm, todoList, isLoading, apiError, targetTodoId],
  );

  const actions = useMemo(
    () => ({
      changeTargetTodoId,
      handleClickTodoElement,
      showCreateForm,
      hideCreateForm,
      handleClickActivateCreateFormButton,
    }),
    [
      changeTargetTodoId,
      handleClickTodoElement,
      showCreateForm,
      hideCreateForm,
      handleClickActivateCreateFormButton,
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
