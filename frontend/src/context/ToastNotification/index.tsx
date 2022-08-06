import { useReducer, createContext, useMemo, useContext, ReactNode } from 'react';

import { DispatchToastNotification, initState, reducer, StateType } from './reducer';

const ToastNotificationStateContext = createContext<StateType>({ toastList: [] });
const ToastNotificationActionContext = createContext<DispatchToastNotification>(() => null);

interface ToastNotificationProviderProps {
  children: ReactNode;
}

export default function ToastNotificationProvider({ children }: ToastNotificationProviderProps) {
  const [state, notifyDispatch] = useReducer(reducer, initState);
  const states = useMemo(() => ({ ...state }), [state]);

  return (
    <ToastNotificationStateContext.Provider value={states}>
      <ToastNotificationActionContext.Provider value={notifyDispatch}>
        {children}
      </ToastNotificationActionContext.Provider>
    </ToastNotificationStateContext.Provider>
  );
}

export function useToastNotificationState() {
  const states = useContext(ToastNotificationStateContext);
  if (states === undefined) {
    throw new Error('useCommentsState should be used within CommentProvider');
  }
  return states;
}

export const useToastNotificationAction = () => {
  const dispatch = useContext(ToastNotificationActionContext);

  if (!dispatch) {
    throw new Error('useToastNotification must be used within ToastNotificationContext');
  }

  return dispatch;
};
