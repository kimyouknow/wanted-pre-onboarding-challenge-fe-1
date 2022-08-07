import { createContext, useMemo, useContext, ReactNode } from 'react';

import useTodoList, { TodoListActionType, TodoListStateType, tooInitState } from './useTodoList';

const ToastNotificationStateContext = createContext<TodoListStateType>(tooInitState);
const ToastNotificationActionContext = createContext<TodoListActionType | null>(null);

interface TodoListProviderProps {
  children: ReactNode;
}

const TodoListProvider = ({ children }: TodoListProviderProps) => {
  const { todoList, isLoading, apiError, changeTargetTodoId, handleClickTodoElement } =
    useTodoList();
  const states = useMemo(
    () => ({ todoList, isLoading, apiError }),
    [todoList, isLoading, apiError],
  );

  const actions = useMemo(
    () => ({ changeTargetTodoId, handleClickTodoElement }),
    [changeTargetTodoId, handleClickTodoElement],
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
