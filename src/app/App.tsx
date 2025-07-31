import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyles';
import theme from '../styles/theme';
import type { ReactNode } from 'react';
import { LanguageProvider } from 'providers/LanguageProvider';
import { SettingsProvider, useSettings } from 'providers/SettingProvider';

type AppProps = {
  children: ReactNode,
}

function App({ children }: AppProps) {
  const { background } = useSettings();
  const bgKey = background as keyof typeof theme.background;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle mainBg={theme.background[bgKey]} />
      {children}
    </ThemeProvider>
  );
}

export default App;