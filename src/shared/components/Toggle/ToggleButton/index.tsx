import { OptionsWrapper, Toggle, ToggleOption } from './ToggleButton.styled';
import { useEffect, useState } from "react";
import { useSettings } from "@providers/SettingProvider";
import useSoundEffect from "@hooks/useSoundEffect";

export type OptionsType<T extends string | number | boolean> = {
    display: string;
    value: T;
}

type ToggleButtonProps<T extends string | number | boolean> = {
    options: OptionsType<T>[];
    defaultOption: T;
    onOptionChange: (option: T) => void;
    disabled?: boolean;
}

function ToggleButton<T extends string | number | boolean>({
    options,
    defaultOption,
    onOptionChange,
    disabled,
}: ToggleButtonProps<T>) {
    const [selected, setSelected] = useState<T>(defaultOption);
    const { style } = useSettings();
    const clickSound = useSoundEffect('/sounds/soft-click.wav');

    useEffect(() => setSelected(defaultOption), [defaultOption]);

    return (
        <Toggle $appTheme={style.appTheme}>
            <OptionsWrapper>
                {options.map((option, index) => (
                    <ToggleOption
                        key={index}
                        $bgColor={style.appTheme.uiSelected}
                        $active={selected === option.value}
                        onClick={() => {
                            if(selected === option.value || disabled) return;
                            setSelected(option.value);
                            onOptionChange(option.value);
                            clickSound();
                        }}
                    >
                        <p>{option.display}</p>
                    </ToggleOption>
                ))}
            </OptionsWrapper>
        </Toggle>
    )
}

export default ToggleButton;