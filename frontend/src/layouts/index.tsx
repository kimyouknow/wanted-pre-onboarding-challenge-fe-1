import { Outlet } from 'react-router-dom';

import GlobalNavigation from '@/layouts/GlobalNavigation';

const Layouts = () => {
  return (
    <div>
      <nav>
        <GlobalNavigation />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layouts;
