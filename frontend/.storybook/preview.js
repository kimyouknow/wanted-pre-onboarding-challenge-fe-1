import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router';
import GlobalStyle from '@/styles/GlobalStyles';
import { theme } from '@/styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </MemoryRouter>
  ),
];
