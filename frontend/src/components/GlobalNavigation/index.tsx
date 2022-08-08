import { Link } from 'react-router-dom';

import { ROUTE } from '@/constant/route';
import { checkIsLogin, logout } from '@/service/handleLogin';

import * as S from './style';

const GlobalNavigation = () => {
  const isLogin = checkIsLogin();

  return (
    <S.Container>
      <li>
        <Link to={ROUTE.TODO}>메인</Link>
      </li>
      {isLogin ? (
        <>
          <li onClick={logout}>로그아웃</li>
        </>
      ) : (
        <>
          <li>
            <Link to={ROUTE.LOGIN}>로그인</Link>
          </li>
          <li>
            <Link to={ROUTE.SIGNUP}>회원가입</Link>
          </li>
        </>
      )}
    </S.Container>
  );
};

export default GlobalNavigation;
