import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

import { ACCESS_TOKEN } from '@/constant/auth';
import { ROUTE } from '@/constant/route';
import { handleLocalStorage } from '@/utils/localstorage';

interface PrivateRouterProps {
  Component: ComponentType;
}

// isLogin ? 로그인한 유저만 접근 가능 : 로그인하지 않은 유저는 접근할 수 없다.
const PrivateRouter = ({ Component }: PrivateRouterProps) => {
  const accessToken = handleLocalStorage.get(ACCESS_TOKEN);
  return accessToken ? <Component /> : <Navigate to={ROUTE.LOGIN} replace />;
};

export default PrivateRouter;
