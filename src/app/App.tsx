import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyles';
import theme from '../styles/theme';
import type { ReactNode } from 'react';
import { LanguageProvider } from 'context/LanguageContext';
import { SettingsProvider } from 'context/SettingContext';

type AppProps = {
  children: ReactNode,
}

function App({ children }: AppProps) {
  return (
    <SettingsProvider>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </LanguageProvider>
    </SettingsProvider>
  );
}

export default App;