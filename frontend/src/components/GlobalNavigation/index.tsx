import { Link, useLocation } from 'react-router-dom';

import LinkButton from '@/components/Common/LinkButton';
import { ROUTE } from '@/constant/route';
import { checkIsLogin, logout } from '@/service/handleLogin';

import * as S from './style';

// TODO: 리스트 배열로 관리해서 map으로 렌더링하기
const GlobalNavigation = () => {
  const isLogin = checkIsLogin();

  return (
    <S.Container>
      {isLogin ? (
        <>
          <LinkButton to={ROUTE.TODO}>메인</LinkButton>
          <li onClick={logout}>로그아웃</li>
        </>
      ) : (
        <>
          <LinkButton to={ROUTE.LOGIN}>로그인</LinkButton>
          <LinkButton to={ROUTE.SIGNUP}>회원가입</LinkButton>
        </>
      )}
    </S.Container>
  );
};

export default GlobalNavigation;
