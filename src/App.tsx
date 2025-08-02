import GlobalStyle from '@styles/GlobalStyles';
import { useSettings } from '@providers/SettingProvider';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Menu from '@screens/Menu';
import Settings from '@screens/Settings';
import Rules from '@screens/Rules';
import GameSetup from '@screens/GameSetup';
import Game from '@screens/Game';
import PwaInstall from '@screens/PwaInstall';
import TextLogo from '@components/Logo/TextLogo';
import NativeArrow from '@components/Buttons/NativeArrow';
import { useEffect } from 'react';
import theme from '@styles/theme';

function App() {
  const { appTheme } = useSettings();

  useEffect(() => {
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", appTheme.base);
    }
  }, []);


  return (
    <BrowserRouter>
      <GlobalStyle appTheme={appTheme} />
      <NativeArrow />
      <TextLogo />
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