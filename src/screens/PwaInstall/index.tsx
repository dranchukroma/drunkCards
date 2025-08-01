import { Wrapper } from "./PwaInstall.styled";
import { useNavigate } from "react-router-dom";
import { useNativeArrow } from "@providers/NativeArrowProvider";

type PwaInstallProps = {

}

export function PwaInstall({} : PwaInstallProps){
    const navigate = useNavigate();
    const { hide } = useNativeArrow();
    hide();

    return (
        <Wrapper>

        </Wrapper>
    )
}

export default PwaInstall;
