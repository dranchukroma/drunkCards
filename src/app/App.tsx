import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyles';
import theme from '../styles/theme';
import type { ReactNode } from 'react';
import { useSettings } from 'providers/SettingProvider';

type AppProps = {
  children: ReactNode,
}

function App({ children }: AppProps) {
  const { appTheme } = useSettings();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle appTheme={appTheme} />
      {children}
    </ThemeProvider>
  );
}

export default App;