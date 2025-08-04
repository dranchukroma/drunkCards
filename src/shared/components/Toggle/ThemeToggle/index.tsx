import { BgPreview, OptionsWrapper, Toggle, SelectOption } from './ThemeToggle.styled';
import { useState } from "react";
import { useSettings } from "@providers/SettingProvider";
import useSoundEffect from "@hooks/useSoundEffect";
import theme from '@styles/theme';
import { toast } from 'sonner';
import { useLanguage } from '@providers/LanguageProvider';

function ThemeToggle() {
    const { style } = useSettings();
    const [selected, setSelected] = useState<string | null>(style.background);
    const clickSound = useSoundEffect('/sounds/soft-click.wav');
    const { translations } = useLanguage();

    return (
        <Toggle $appTheme={style.appTheme}>
            <OptionsWrapper>
                {Object.entries(theme.appTheme).map(([key, theme]) => (
                    <SelectOption
                        key={key}
                        $bgColor={style.appTheme.uiSelected}
                        $active={selected === key}
                        onClick={() => {
                            if (selected === key) return;
                            toast(translations.settings.backgroundSonner.sonnerText, {
                                action: {
                                    label: translations.settings.backgroundSonner.buttonLabel,
                                    onClick: () => window.location.reload(),
                                },
                                position: 'top-center',
                            });
                            setSelected(key);
                            clickSound();
                            style.setBackground(key);
                        }}
                    >
                        <BgPreview $bgColor={theme.base} />
                    </SelectOption>
                ))}
            </OptionsWrapper>
        </Toggle>
    )
}

export default ThemeToggle;