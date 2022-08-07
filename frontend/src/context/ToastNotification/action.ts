import { Dispatch } from 'react';

import { DeleteToastAction, NotifyToastAction, ToastType } from '@/types/toastNotification.type';

import { DeleteAction, NotifyAction } from './reducer';

export const notifyNewMessage = (
  dispatch: Dispatch<NotifyAction>,
  message: string,
  notifyType: ToastType,
) => dispatch({ type: NotifyToastAction, payload: { message, notifyType } });

export const deleteMessage = (dispatch: Dispatch<DeleteAction>, id: string) =>
  dispatch({ type: DeleteToastAction, payload: { id } });
