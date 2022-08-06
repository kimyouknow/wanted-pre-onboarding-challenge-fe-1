import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

import GlobalNavigation from '@/components/GlobalNavigation';
import ToastNotification from '@/components/ToastNotification';
import ToastNotificationProvider, {
  useToastNotificationAction,
  useToastNotificationState,
} from '@/context/ToastNotification';
import { deleteMessage } from '@/context/ToastNotification/action';
import WithProvider from '@/hoc/WithProvider';

const Layouts = () => {
  const { toastList } = useToastNotificationState();
  const notifyDispatch = useToastNotificationAction();
  const deleteToastCallback = (id: string) => {
    deleteMessage(notifyDispatch, id);
  };
  return (
    <Container maxWidth="sm">
      <nav>
        <GlobalNavigation />
      </nav>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          direction: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '3rem',
        }}
      >
        <Outlet />
      </Box>
      <ToastNotification
        toastList={toastList}
        col="top"
        row="right"
        autoDelete
        autoDeleteTime={1000}
        deleteCallback={deleteToastCallback}
      />
    </Container>
  );
};

export default WithProvider({ Provider: ToastNotificationProvider, Component: Layouts });
