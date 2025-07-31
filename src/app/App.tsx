import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyles';
import theme from '../styles/theme';
import type { ReactNode } from 'react';

type AppProps = {
  children: ReactNode,
}

function App({ children }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default App;