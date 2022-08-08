import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

import { ACCESS_TOKEN } from '@/constant/auth';
import { ROUTE } from '@/constant/route';
import { handleLocalStorage } from '@/utils/localstorage';

interface PublicRouterProps {
  Component: ComponentType;
  restricted: boolean;
}

// restricted = false  => public route
// restricted = true => 로그인한 유저는 못들어감 (회원가입 페이지, 로그인 페이지)
const PublicRouter = ({ Component, restricted }: PublicRouterProps) => {
  const accessToken = handleLocalStorage.get(ACCESS_TOKEN);
  return accessToken && restricted ? <Navigate to={ROUTE.TODO} replace /> : <Component />;
};

export default PublicRouter;
