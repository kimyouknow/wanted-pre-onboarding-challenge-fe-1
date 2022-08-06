import { Dispatch } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  DeleteToastAction,
  NotifyToastAction,
  ToastElementType,
  ToastType,
} from '@/types/toastNotification.type';

export type StateType = {
  toastList: ToastElementType[];
};

export type NotifyAction = {
  type: typeof NotifyToastAction;
  payload: {
    message: string;
    notifyType: ToastType;
  };
};

export type DeleteAction = {
  type: typeof DeleteToastAction;
  payload: {
    id: string;
  };
};

type ToastNotificAtionType = NotifyAction | DeleteAction;

export type DispatchToastNotification = Dispatch<ToastNotificAtionType>;

export const initState: StateType = {
  // TODO: 예시 코드입니다. 지워야합니다.
  toastList: [
    // {
    //   id: 'asdf',
    //   type: 'Success',
    //   description: 'This is a success toast component',
    // },
    // {
    //   id: 'bb',
    //   type: 'Error',
    //   description: 'This is an error toast component',
    // },
    // {
    //   id: 'cacaa',
    //   type: 'Warning',
    //   description: 'This is an error toast component',
    // },
  ],
};

export const reducer = (state: StateType, action: ToastNotificAtionType) => {
  const { type, payload } = action;
  switch (type) {
    case NotifyToastAction: {
      const { message, notifyType } = payload;
      const { toastList } = state;
      const newNotification = getNewToast(message, notifyType);
      return {
        toastList: [...toastList, newNotification],
      };
    }
    case DeleteToastAction: {
      const { id } = payload;
      const { toastList } = state;
      const newToastList = toastList.filter(element => element.id !== id);
      return {
        toastList: newToastList,
      };
    }
    default:
      return { ...state };
  }
};

const getNewToast = (message: string, notifyType: ToastType) => ({
  id: uuidv4(),
  type: notifyType,
  description: message,
});
