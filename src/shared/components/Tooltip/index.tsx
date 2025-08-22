import useSoundEffect from "@hooks/useSoundEffect";
import { TooltipContainer } from "./Tooltip.styled";

type TooltipProps = {
    color: string;
    onClick: () => void;
    disabled?: boolean;
}

function Tooltip({ color, onClick, disabled = false }: TooltipProps) {
    const clickSound = useSoundEffect('/sounds/soft-click.wav');
    return (
        <TooltipContainer 
        $color={color} 
        $disabled={disabled} 
        onClick={() => {
            clickSound();
            setTimeout(onClick, 150);
        }
        } />
    )
}

export default Tooltip;