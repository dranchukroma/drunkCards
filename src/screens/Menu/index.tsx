import { MenuWrapper, StyledImageLogo, SuitsWrapper, LogoLabel, IconClubs, IconHearts, IconDiamonds, IconSpades } from "./Menu.styled";
import MenuButton from "shared/components/Buttons/MenuButton";
import { useLanguage } from "../../providers/LanguageProvider";
import { useNavigate } from "react-router-dom";
import { useSettings } from "@providers/SettingProvider";
import { useNativeArrow } from "@providers/NativeArrowProvider";
import { useEffect } from "react";
import { usePwaRedirect } from "./usePwaRedirect";

export function Menu() {
    usePwaRedirect();
    const { translations } = useLanguage();
    const { style, game } = useSettings();
    const appTheme = style.appTheme
    const { hide } = useNativeArrow();
    const navigate = useNavigate();

    useEffect(() => hide(), [hide]);

    return (
        <MenuWrapper>
            <StyledImageLogo fillColor={appTheme.logoColor} />
            <SuitsWrapper>
                <IconClubs fillColor={appTheme.logoColor} />
                <IconHearts fillColor={appTheme.logoColor} />
                <IconDiamonds fillColor={appTheme.logoColor} />
                <IconSpades fillColor={appTheme.logoColor} />
            </SuitsWrapper>
            <LogoLabel $fillColor={appTheme.logoColor}>
                {translations.menu.logoLabel}
            </LogoLabel>
            <MenuButton onClick={() => navigate(game.gameSetup ? '/setup' : '/game')}>
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
