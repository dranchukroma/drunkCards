import SettingButton, { type OptionsType } from "@components/Toggle/SettingButton";
import { ToggleInfoWrapper, ToggleLabel, ToggleTooltip, Toggle } from "./Settings.styled";
import { useSettings } from "@providers/SettingProvider";

type SettingOptionType<T extends string | number | boolean> = {
    copy: string;
    options: OptionsType<T>[],
    defaultOption: T;
    onOptionChange: (option: T) => void;
}

function SettingOption<
    T extends string | number | boolean
>({ copy, options, defaultOption, onOptionChange }: SettingOptionType<T>) {
    const { appTheme } = useSettings();

    return (
        <Toggle>
            <ToggleInfoWrapper>
                <ToggleLabel
                    color={appTheme.fontColor}
                    shadows={appTheme.textShadow}
                >
                    {copy}
                </ToggleLabel>
                <ToggleTooltip
                    color={appTheme.fontColor}
                />
            </ToggleInfoWrapper>
            <SettingButton
                options={options}
                defaultOption={defaultOption}
                onOptionChange={onOptionChange}
            />
        </Toggle>
    )
}

export default SettingOption;