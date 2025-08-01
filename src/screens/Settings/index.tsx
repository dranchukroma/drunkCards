import { useNativeArrow } from "@providers/NativeArrowProvider";
import { SettingWrapper } from "./Settings.styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type SettingsProps = {

}

export function Settings({ }: SettingsProps) {
    const navigate = useNavigate();
    const { show } = useNativeArrow();

    useEffect(() => {
        show(() => navigate(-1));
    }, []);

    return (
        <SettingWrapper>
            asdf
        </SettingWrapper>
    )
}

export default Settings;
