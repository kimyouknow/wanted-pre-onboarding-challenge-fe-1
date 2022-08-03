import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { ROUTE } from '@/constant/route';
import Layouts from '@/layouts';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import SignUp from '@/pages/Signup';
import Todos from '@/pages/Todos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE.MAIN} element={<Layouts />}>
          <Route index element={<Navigate to={ROUTE.TODO} replace />} />
          <Route path={ROUTE.TODO} element={<Todos />} />
          <Route path={ROUTE.LOGIN} element={<Login />} />
          <Route path={ROUTE.SIGNUP} element={<SignUp />} />
        </Route>
        <Route path={ROUTE.FALLBACK} element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
