import { createBrowserRouter } from "react-router-dom";
import Game from "@screens/Game";
import GameSetup from "@screens/GameSetup";
import Settings from "@screens/Settings";
import Rules from "@screens/Rules";
import Menu from "@screens/Menu";
import PwaInstall from "@screens/PwaInstall";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu/>,
    },
    {
        path: '/settings',
        element: <Settings/>,
    },
    {
        path: '/rules',
        element: <Rules/>,
    },
    {
        path: '/setup',
        element: <GameSetup/>,
    },
    {
        path: '/game',
        element: <Game/>,
    },
    {
        path: '/PwaInstall',
        element: <PwaInstall/>,
    },
])
