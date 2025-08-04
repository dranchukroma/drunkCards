import { BgPreview, OptionsWrapper, Toggle, SelectOption } from './ThemeToggle.styled';
import { useState } from "react";
import { useSettings } from "@providers/SettingProvider";
import useSoundEffect from "@hooks/useSoundEffect";
import theme from '@styles/theme';

function ThemeToggle() {
    const { style } = useSettings();
    const [selected, setSelected] = useState<string | null>(style.background);
    const clickSound = useSoundEffect('/sounds/soft-click.wav');

    return (
        <Toggle $appTheme={style.appTheme}>
            <OptionsWrapper>
                {Object.entries(theme.appTheme).map(([key, theme]) => (
                    <SelectOption
                        key={key}
                        $bgColor={style.appTheme.uiSelected}
                        $active={selected === key}
                        onClick={() => {
                            if(selected === key) return;
                            setSelected(key);
                            style.setBackground(key);
                            clickSound();
                        }}
                    >
                        <BgPreview $bgColor={theme.base}/>
                    </SelectOption>
                ))}
            </OptionsWrapper>
        </Toggle>
    )
}

export default ThemeToggle;