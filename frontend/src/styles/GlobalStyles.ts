import { createGlobalStyle } from 'styled-components';

import fonts from '@/assets/fonts';

import Normalize from './Normalize';

const GlobalStyle = createGlobalStyle`
${Normalize}
${fonts}
* {
  font-family: 'Noto Sans';
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
button,
input,
select,
textarea {
  background-color: transparent;
  border: 0;
  &:focus {
    outline: none;
    box-shadow: none;
  }
}
a,
button {
  text-decoration: none;
    color: inherit;
    cursor: pointer;
}
ul, li {
  padding: 0;
  list-style: none;
}
`;

export default GlobalStyle;
