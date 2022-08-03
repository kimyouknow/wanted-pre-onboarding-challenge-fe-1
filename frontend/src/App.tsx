import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ROUTE } from '@/constant/route';
import Layouts from '@/layouts';
import Login from '@/pages/Login';
import Main from '@/pages/Main';
import NotFound from '@/pages/NotFound';
import SignUp from '@/pages/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE.MAIN} element={<Layouts />}>
          <Route index element={<Main />} />
          <Route path={ROUTE.LOGIN} element={<Login />} />
          <Route path={ROUTE.SIGNUP} element={<SignUp />} />
        </Route>
        <Route path={ROUTE.FALLBACK} element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
