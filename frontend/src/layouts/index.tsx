import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

import GlobalNavigation from '@/components/GlobalNavigation';
import ToastNotification from '@/components/ToastNotification';
import ToastNotificationProvider, {
  useToastNotificationAction,
  useToastNotificationState,
} from '@/context/ToastNotification';
import { deleteMessage } from '@/context/ToastNotification/action';
import WithProvider from '@/hoc/WithProvider';

import * as S from './style';

const Layouts = () => {
  const { toastList } = useToastNotificationState();
  const notifyDispatch = useToastNotificationAction();
  const deleteToastCallback = (id: string) => {
    deleteMessage(notifyDispatch, id);
  };
  return (
    <S.Container>
      <GlobalNavigation />
      <S.Main>
        <Outlet />
      </S.Main>
      <ToastNotification
        toastList={toastList}
        col="top"
        row="right"
        autoDelete
        autoDeleteTime={1000}
        deleteCallback={deleteToastCallback}
      />
    </S.Container>
  );
};

export default WithProvider({ Provider: ToastNotificationProvider, Component: Layouts });
