import reactIconImg from '@/assets/images/React-icon.png';

import * as S from './style';

interface Iprops {
  content: string;
  msg: string;
}

export default function Card({ content, msg }: Iprops) {
  return (
    <S.Container>
      <h1>{msg}</h1>
      <p>{content}</p>
      <S.ReactIconImg src={reactIconImg} alt="react-icon" />
      <S.PauseCircle />
    </S.Container>
  );
}
