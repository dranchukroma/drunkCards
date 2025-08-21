import { useLocation } from "react-router-dom";
import { Wrapper } from "./ScreenWrapper.styled";
import { useEffect, type ReactNode } from "react";
import { useGameStore } from "storage/gameStorage";
import { useSettings } from "@providers/SettingProvider";

type ScreenWrapperProps = {
    children: ReactNode,
    className?: string,
}

function ScreenWrapper({ children, className }: ScreenWrapperProps) {
    const { resetGame } = useGameStore()
    const { game } = useSettings();
    const location = useLocation();

    const allowedGamingPath = ['/game']
    console.log(location.pathname)

    useEffect(() => {
        if (!allowedGamingPath.includes(location.pathname)) {
            resetGame();
            game.setGamingMode(false);
        }
    }, [location]);

    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    )
}

export default ScreenWrapper;