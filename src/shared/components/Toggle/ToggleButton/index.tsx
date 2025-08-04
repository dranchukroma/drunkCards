import { OptionsWrapper, Toggle, ToggleOption } from './ToggleButton.styled';
import { useEffect, useState, type ReactNode } from "react";
import { useSettings } from "@providers/SettingProvider";
import useSoundEffect from "@hooks/useSoundEffect";

export type OptionsType<T extends string | number | boolean | ReactNode> = {
    display: ReactNode;
    value: T;
}

type ToggleButtonProps<T extends string | number | boolean | ReactNode> = {
    options: OptionsType<T>[];
    defaultOption: T;
    onOptionChange: (option: T) => void;
    disabled?: boolean;
}

function ToggleButton<T extends string | number | boolean | ReactNode>({
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
                        $appTheme={style.appTheme}
                        $active={!disabled && selected === option.value}
                        onClick={() => {
                            if(selected === option.value || disabled) return;
                            setSelected(option.value);
                            onOptionChange(option.value);
                            clickSound();
                        }}
                    >
                        {option.display}
                    </ToggleOption>
                ))}
            </OptionsWrapper>
        </Toggle>
    )
}

export default ToggleButton;