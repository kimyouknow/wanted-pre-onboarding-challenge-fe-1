import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

import GlobalNavigation from '@/components/GlobalNavigation';

const Layouts = () => {
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
    </Container>
  );
};

export default Layouts;
