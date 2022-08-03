import styled from 'styled-components';

import PauseCircleIcon from '@/assets/icons/pauseCircle.svg';

export const Container = styled.div`
  h1 {
    font-family: 'NanumMyeongjo';
    background-color: tomato;
  }
`;

export const ReactIconImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const PauseCircle = styled(PauseCircleIcon)`
  width: 24px;
  height: 24px;
`;
