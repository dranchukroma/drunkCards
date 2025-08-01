import { Wrapper } from "./PwaInstall.styled";
import { useNavigate } from "react-router-dom";
import { useNativeArrow } from "@providers/NativeArrowProvider";
import { useEffect } from "react";

type PwaInstallProps = {

}

export function PwaInstall({ }: PwaInstallProps) {
    const navigate = useNavigate();
    const { hide } = useNativeArrow();

    useEffect(() => {
        hide();
    }, []);

    return (
        <Wrapper>

        </Wrapper>
    )
}

export default PwaInstall;
