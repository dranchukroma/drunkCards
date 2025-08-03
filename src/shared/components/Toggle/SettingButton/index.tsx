import { OptionsWrapper, Toggle, ToggleOption } from "./SettingButton.styled";
import { useState } from "react";
import { useSettings } from "@providers/SettingProvider";
import useSoundEffect from "@hooks/useSoundEffect";

export type OptionsType<T extends string | number | boolean> = {
    display: string;
    value: T;
}

type SettingButtonProps<T extends string | number | boolean> = {
    options: OptionsType<T>[];
    defaultOption: T;
    onOptionChange: (option: T) => void;
}

function SettingButton<T extends string | number | boolean>({
    options,
    defaultOption,
    onOptionChange,
}: SettingButtonProps<T>) {
    const [selected, setSelected] = useState<T>(defaultOption);
    const { appTheme } = useSettings();
    const clickSound = useSoundEffect('/sounds/soft-click.wav');

    console.log('storage: ', localStorage.getItem('sounds'))
    console.log('default: ', defaultOption);
    console.log(options);

    return (
        <Toggle $appTheme={appTheme}>
            <OptionsWrapper>
                {options.map((option, index) => (
                    <ToggleOption
                        key={index}
                        $bgColor={appTheme.uiSelected}
                        $active={selected === option.value}
                        onClick={() => {
                            setSelected(option.value);
                            onOptionChange(option.value);
                            clickSound();
                            console.log('default: ', defaultOption);
                            console.log(selected === option.value);
                        }}
                    >
                        <p>{option.display}</p>
                    </ToggleOption>
                ))}
            </OptionsWrapper>
        </Toggle>
    )
}

export default SettingButton;