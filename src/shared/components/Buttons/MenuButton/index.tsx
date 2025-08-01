import type { ReactNode } from "react";
import { useSettings } from "../../../../providers/SettingProvider";
import { StyledButtonContainer } from "./MenuButton.styled";

type MenuButtonProps = {
    children: ReactNode,
    onClick: () => void,
}

function MenuButton({ children, onClick }: MenuButtonProps){
    const { appTheme } = useSettings();

    return (
        <StyledButtonContainer onClick={onClick} appTheme={appTheme}>
            {children}
        </StyledButtonContainer>
    )
}

export default MenuButton;