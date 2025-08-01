import { useNativeArrow } from "@providers/NativeArrowProvider";
import { SettingWrapper } from "./Settings.styled";
import { useNavigate } from "react-router-dom";

type SettingsProps = {

}

export function Settings({} : SettingsProps){
    const navigate = useNavigate();
    const { show } = useNativeArrow();
    show(() => navigate(-1));

    return (
        <SettingWrapper>
            asdf
        </SettingWrapper>
    )
}

export default Settings;
