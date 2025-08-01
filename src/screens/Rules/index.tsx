import { useNativeArrow } from "@providers/NativeArrowProvider";
import { Wrapper } from "./Rules.styled";
import { useNavigate } from "react-router-dom";

type RulesProps = {

}

export function Rules({} : RulesProps){
    const navigate = useNavigate();
    const { show } = useNativeArrow();
    show(() => navigate(-1));

    return (
        <Wrapper>

        </Wrapper>
    )
}

export default Rules;
