import { Link } from 'react-router-dom';

import { ROUTE } from '@/constant/route';

const GlobalNavigation = () => {
  return (
    <ul>
      <li>
        <Link to={ROUTE.MAIN}>메인</Link>
      </li>
      <li>
        <Link to={ROUTE.LOGIN}>로그인</Link>
      </li>
      <li>
        <Link to={ROUTE.SIGNUP}>회원가입</Link>
      </li>
    </ul>
  );
};

export default GlobalNavigation;
