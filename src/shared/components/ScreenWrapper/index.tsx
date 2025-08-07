import { useLocation } from "react-router-dom";
import { Wrapper } from "./ScreenWrapper.styled";
import { useEffect, type ReactNode } from "react";
import { useGameStore } from "storage/gameStorage";
import { setGamingMode } from "shared/utils/gamingMode";

type ScreenWrapperProps = {
    children: ReactNode,
    className?: string,
}

function ScreenWrapper({ children, className }: ScreenWrapperProps) {
    const { resetGame } = useGameStore()
    const location = useLocation();

    const allowedGamingPath = ['/game']

    useEffect(() => {
        if (!allowedGamingPath.includes(location.pathname)) {
            resetGame();
            setGamingMode(false);
        }
    }, [location]);

    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    )
}

export default ScreenWrapper;