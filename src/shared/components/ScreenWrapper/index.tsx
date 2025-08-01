import { Wrapper } from "./ScreenWrapper.styled";
import type { ReactNode } from "react";

type ScreenWrapperProps = {
    children: ReactNode,
    className?: string,
}

function ScreenWrapper({ children, className }: ScreenWrapperProps) {
    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    )
}

export default ScreenWrapper;