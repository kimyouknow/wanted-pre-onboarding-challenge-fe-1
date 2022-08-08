import styled from 'styled-components';

export const LinkButton = styled.div<{ isActive: boolean }>`
  border-bottom: solid 4px;
  border-bottom-color: ${({ isActive }) => (isActive ? 'tomato' : 'transparent')};
`;
