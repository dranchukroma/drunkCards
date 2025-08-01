import { Wrapper } from "./GameSetup.styled";
import { useNativeArrow } from "@providers/NativeArrowProvider";
import { useNavigate } from "react-router-dom";

type GameSetupProps = {

}

export function GameSetup({} : GameSetupProps){
    const navigate = useNavigate();
    const { show } = useNativeArrow();
    show(() => navigate(-1));

    return (
        <Wrapper>

        </Wrapper>
    )
}

export default GameSetup;
