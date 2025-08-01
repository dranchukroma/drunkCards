import { LogoContainer, TopLogo, /*MiddleLogo, BottomLogo*/ } from "./TextLogo.styled"
import { useSettings } from "@providers/SettingProvider";

function TextLogo() {
    const { appTheme } = useSettings();

    return (
        <LogoContainer $fillColor={appTheme.logoColor}>
            <TopLogo>Drunk Cards</TopLogo>
            {/* <MiddleLogo>Drunk Cards</MiddleLogo>
            <BottomLogo>Drunk Cards</BottomLogo> */}
        </LogoContainer>
    )
}

export default TextLogo