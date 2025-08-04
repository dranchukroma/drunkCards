import { OptionsWrapper, Toggle, ToggleOption } from './LanguageToggle.styled';
import { useEffect, useState, type ReactNode } from "react";
import { useSettings } from "@providers/SettingProvider";
import useSoundEffect from "@hooks/useSoundEffect";

export type OptionsType = {
    display: ReactNode;
    value: string;
}

type LanguageToggleProps = {
    options: OptionsType[];
    defaultOption: string;
    onOptionChange: (option: string) => void;
    disabled?: boolean;
}

function LanguageToggle({ options, defaultOption, onOptionChange, disabled }: LanguageToggleProps) {
    const [selected, setSelected] = useState<string>(defaultOption);
    const { style } = useSettings();
    const clickSound = useSoundEffect('/sounds/soft-click.wav');

    useEffect(() => setSelected(defaultOption), [defaultOption]);

    return (<>
        {disabled ? <Toggle $appTheme={style.appTheme}>
            <OptionsWrapper>
                {options.map((option, index) => (
                    <ToggleOption
                        key={index}
                        $bgColor={style.appTheme.uiSelected}
                        $active={!disabled && selected === option.value}
                        onClick={() => {
                            if (selected === option.value) return;
                            setSelected(option.value);
                            onOptionChange(option.value);
                            clickSound();
                        }}
                    >
                        <p>{option.display}</p>
                    </ToggleOption>
                ))}
            </OptionsWrapper>
        </Toggle> : null}
    </>)
}

export default LanguageToggle;