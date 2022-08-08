import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as S from './style';

interface LinkButtonProps {
  children: ReactNode;
  to: string;
}

// mui처럼 스타일 주기 (클릭할 때 effect, border-bottom 꽉차게)
const LinkButton = ({ children, to }: LinkButtonProps) => {
  const location = useLocation();
  const isActive = location.pathname.includes(to);
  return (
    <S.LinkButton isActive={isActive}>
      <Link to={to}>{children}</Link>
    </S.LinkButton>
  );
};

export default LinkButton;
