import { MenuWrapper, StyledImageLogo, SuitsWrapper, LogoLabel, IconClubs, IconHearts, IconDiamonds, IconSpades } from "./Menu.styled";
import MenuButton from "shared/components/Buttons/MenuButton";
import { useLanguage } from "../../providers/LanguageProvider";
import { useNavigate } from "react-router-dom";
import { useSettings } from "@providers/SettingProvider";
import { useNativeArrow } from "@providers/NativeArrowProvider";
import { useEffect } from "react";
import { usePwaRedirect } from "./usePwaRedirect";
import { initialGame } from "@screens/Game/initialGame";
import { useGameStore } from "storage/gameStorage";

export function Menu() {
    usePwaRedirect();
    const { translations } = useLanguage();
    const { style, game } = useSettings();
    const appTheme = style.appTheme
    const { hide } = useNativeArrow();
    const navigate = useNavigate();
    const setDeck = useGameStore.getState().setDeck
    const setInfinityCards = useGameStore.getState().setInfinityCards

    useEffect(() => hide(), [hide]);

    const usePlayButton = () => {
        if(game.gameSetup) return navigate('/setup');
        return initialGame(game.limitCards, navigate, setDeck, () => setInfinityCards(game.infinityCards), game.setGamingMode)
    }
    
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
            <MenuButton onClick={usePlayButton}>
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
