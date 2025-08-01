import { useNativeArrow } from "@providers/NativeArrowProvider";
import { Wrapper } from "./Rules.styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type RulesProps = {

}

export function Rules({} : RulesProps){
    const navigate = useNavigate();
    const { show } = useNativeArrow();

    useEffect(() => {
        show(() => navigate(-1));
    }, []);
    return (
        <Wrapper>

        </Wrapper>
    )
}

export default Rules;
