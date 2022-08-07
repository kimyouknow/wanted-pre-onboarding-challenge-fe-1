export type ToastType = 'Success' | 'Error' | 'Warning' | 'Info';

export interface ToastElementType {
  id: string;
  type: ToastType;
  description: string;
}

export const NotifyToastAction = 'notifyToast' as const;
export const DeleteToastAction = 'deleteToast' as const;
