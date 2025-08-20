import type { ReactNode } from "react";
import { useSettings } from "@providers/SettingProvider";
import { StyledButtonContainer } from "./MenuButton.styled";
import useSoundEffect from "@hooks/useSoundEffect";

type MenuButtonProps = {
    children: ReactNode,
    onClick: () => void,
    className?: string,
}

function MenuButton({ children, onClick, className }: MenuButtonProps) {
    const { style } = useSettings();
    const clickSound = useSoundEffect('/sounds/soft-click.wav');

    return (
        <StyledButtonContainer className={className} onClick={() => {
            clickSound();
            setTimeout(onClick, 150); // 120–200 мс зазвичай достатньо
        }}
            $appTheme={style.appTheme}
        >
            {children}
        </StyledButtonContainer>
    )
}

export default MenuButton;