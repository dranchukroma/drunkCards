import { TooltipContainer } from "./Tooltip.styled";

type TooltipProps = {
    color: string;
    onClick: () => void;
    disabled?: boolean;
}

function Tooltip({ color, onClick, disabled = false}: TooltipProps){
    return <TooltipContainer $color={color} $disabled={disabled} onClick={onClick}/>
}

export default Tooltip;