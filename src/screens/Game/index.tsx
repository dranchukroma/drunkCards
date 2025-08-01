import { useNativeArrow } from "@providers/NativeArrowProvider";
import { Wrapper } from "./Game.styled";
import { useNavigate } from "react-router-dom";

type GameProps = {

}

export function Game({} : GameProps){
    const navigate = useNavigate();
    const { show } = useNativeArrow();
    show(() => console.log('Show modal'));

    return (
        <Wrapper>

        </Wrapper>
    )
}

export default Game;
