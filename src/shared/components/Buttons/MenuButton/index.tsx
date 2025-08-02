import type { ReactNode } from "react";
import { useSettings } from "@providers/SettingProvider";
import { StyledButtonContainer } from "./MenuButton.styled";
import useSoundEffect from "@hooks/useSoundEffect";

type MenuButtonProps = {
    children: ReactNode,
    onClick: () => void,
}

function MenuButton({ children, onClick }: MenuButtonProps) {
    const { appTheme } = useSettings();
    const clickSound = useSoundEffect('/sounds/soft-click.wav')

    return (
        <StyledButtonContainer onClick={() => {
            onClick();
            clickSound();
        }}
            $appTheme={appTheme}
        >
            {children}
        </StyledButtonContainer>
    )
}

export default MenuButton;