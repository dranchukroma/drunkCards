import { MenuWrapper, StyledImageLogo, SuitsWrapper, LogoLabel, IconClubs, IconHearts, IconDiamonds, IconSpades } from "./Menu.styled";
import MenuButton from "shared/components/Buttons/MenuButton";
import { useLanguage } from "../../providers/LanguageProvider";
import { useNavigate } from "react-router-dom";
import { useSettings } from "@providers/SettingProvider";
import { useNativeArrow } from "@providers/NativeArrowProvider";

export function Menu() {
    const { translations } = useLanguage();
    const { appTheme, gameSetup } = useSettings();
    const { hide } = useNativeArrow();
    const navigate = useNavigate();
    hide();

    return (
        <MenuWrapper>
            <StyledImageLogo fillColor={appTheme.logoColor} />
            <SuitsWrapper>
                <IconClubs fillColor={appTheme.logoColor} />
                <IconHearts fillColor={appTheme.logoColor} />
                <IconDiamonds fillColor={appTheme.logoColor} />
                <IconSpades fillColor={appTheme.logoColor} />
            </SuitsWrapper>
            <LogoLabel fillColor={appTheme.logoColor}>
                The game begins. Will you endure?
            </LogoLabel>
            <MenuButton onClick={() => navigate(gameSetup ? '/setup' : '/game')}>
                {translations.menu.playCTA}
            </MenuButton>
            <MenuButton onClick={() => navigate('/rules')}>
                {translations.menu.rulesCTA}
            </MenuButton>
            <MenuButton onClick={() => navigate('/settings')}>
                {translations.menu.settingsCTA}
            </MenuButton>
        </MenuWrapper>
    )
}

export default Menu;
