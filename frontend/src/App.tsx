import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { ROUTE } from '@/constant/route';
import PrivateRouter from '@/hoc/PrivateRouter';
import PublicRouter from '@/hoc/PulbickRouter';
import Layouts from '@/layouts';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import SignUp from '@/pages/SignUp';
import Todo from '@/pages/Todo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE.MAIN} element={<Layouts />}>
          <Route index element={<Navigate to={ROUTE.TODO} replace />} />
          <Route path={ROUTE.TODO + '*'} element={<PrivateRouter Component={Todo} />} />
          <Route path={ROUTE.LOGIN} element={<PublicRouter Component={Login} restricted />} />
          <Route path={ROUTE.SIGNUP} element={<PublicRouter Component={SignUp} restricted />} />
        </Route>
        <Route path={ROUTE.FALLBACK} element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
