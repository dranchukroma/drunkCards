import { InfoWrapper, ToggleLabel, ToggleTooltip, ToggleGroupContainer } from "./Settings.styled";
import { useSettings } from "@providers/SettingProvider";
import ToggleButton, { type OptionsType } from "@components/Toggle/ToggleButton";

type ToggleGroupType<T extends string | number | boolean> = {
    label: string;
    options: OptionsType<T>[],
    defaultOption: T;
    onOptionChange: (option: T) => void;
    disabled?: boolean;
    onTooltip?: () => void;
}

function ToggleGroup<
    T extends string | number | boolean
>({ label, options, defaultOption, onOptionChange, onTooltip, disabled }: ToggleGroupType<T>) {
    const { style } = useSettings();
    const appTheme = style.appTheme;

    return (<ToggleGroupContainer $disabled={disabled}>
        <InfoWrapper>
            <ToggleLabel
                color={appTheme.fontColor}
                $shadows={appTheme.textShadow}
            >
                {label}
            </ToggleLabel>
            <ToggleTooltip
                color={appTheme.fontColor}
                onClick={() => {
                    if (disabled || !onTooltip) return;
                    onTooltip();
                }}
            />
        </InfoWrapper>
        <ToggleButton
            options={options}
            defaultOption={defaultOption}
            disabled={disabled}
            onOptionChange={(val) => {
                if (disabled) return;
                onOptionChange(val);
            }}
        />
    </ToggleGroupContainer>)
}

export default ToggleGroup;