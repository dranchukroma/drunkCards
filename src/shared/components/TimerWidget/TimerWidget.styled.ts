import theme from "@styles/theme";
import styled from "styled-components";

export const TimerContainer = styled.div<{$bgColor: string, $shadows: string}>`
    min-height: 65px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({$bgColor}) => $bgColor};
    position: relative;
    box-shadow: ${({$shadows}) => $shadows};
    overflow: hidden;

    /* margin-bottom: 50px; */
`

export const TimeLeft = styled.h2<{$color: string}>`
    color: ${({$color}) => $color};
    z-index: 1;
`

export const ProgressBar = styled.div<{$width: number, $progressColor: string}>`
    position: absolute;
    width: ${({ $width }) => `${$width}%`};
    top: 0;
    left: 0;
    height: 100%;
    background: ${({$progressColor}) => $progressColor};
    z-index: 0;
    transition: width 1s linear;
    border-radius: 10px;

`;