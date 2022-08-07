import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTE } from '@/constant/route';

const GlobalNavigation = () => {
  const path = window.location.pathname;
  const currentTab = ROUTER_INDEX[path];
  const [activeTabIndex, setActiveTabIndex] = useState(currentTab);
  const handleActiveTab = (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
    setActiveTabIndex(newValue);
  };

  return (
    <ul>
      <Tabs
        value={activeTabIndex}
        onChange={handleActiveTab}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="메인" to={ROUTE.TODO} component={Link} />
        <Tab label="로그인" to={ROUTE.LOGIN} component={Link} />
        <Tab label="회원가입" to={ROUTE.SIGNUP} component={Link} />
      </Tabs>
    </ul>
  );
};

export default GlobalNavigation;

const ROUTER_INDEX = {
  [ROUTE.MAIN]: 0,
  [ROUTE.TODO]: 0,
  [ROUTE.LOGIN]: 1,
  [ROUTE.SIGNUP]: 2,
};
