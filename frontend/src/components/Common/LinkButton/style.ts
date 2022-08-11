import styled from 'styled-components';

export const LinkButton = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 4px;
  border-bottom-color: ${({ isActive }) => (isActive ? 'tomato' : 'transparent')};
`;
