import { InfoWrapper, ToggleLabel, ToggleTooltip, Toggle } from "./Settings.styled";
import { useSettings } from "@providers/SettingProvider";
import ToggleButton, { type OptionsType } from "@components/Toggle/SettingButton";

type ToggleGroupType<T extends string | number | boolean> = {
    label: string;
    options: OptionsType<T>[],
    defaultOption: T;
    onOptionChange: (option: T) => void;
}

function ToggleGroup<
    T extends string | number | boolean
>({ label, options, defaultOption, onOptionChange }: ToggleGroupType<T>) {
    const { style } = useSettings();
    const appTheme = style.appTheme;

    return (<>
        <InfoWrapper>
            <ToggleLabel
                color={appTheme.fontColor}
                shadows={appTheme.textShadow}
            >
                {label}
            </ToggleLabel>
            <ToggleTooltip color={appTheme.fontColor} />
        </InfoWrapper>
        <ToggleButton
            options={options}
            defaultOption={defaultOption}
            onOptionChange={onOptionChange}
        />
    </>)
}

export default ToggleGroup;