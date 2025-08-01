import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/GlobalStyles';
import { useSettings } from '@providers/SettingProvider';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Menu from '@screens/Menu';
import Settings from '@screens/Settings';
import Rules from '@screens/Rules';
import GameSetup from '@screens/GameSetup';
import Game from '@screens/Game';
import PwaInstall from '@screens/PwaInstall';

function App() {
  const { appTheme } = useSettings();

  return (
    <BrowserRouter>
      <GlobalStyle appTheme={appTheme} />
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/setup' element={<GameSetup />} />
        <Route path='/game' element={<Game />} />
        <Route path='/PwaInstall' element={<PwaInstall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;