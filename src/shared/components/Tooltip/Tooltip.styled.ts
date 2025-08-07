import styled from "styled-components";
import theme from "@styles/theme";

export const TooltipContainer = styled.div<{ $color: string, $disabled: boolean }>`
  height: 26px;
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${({ $color }) => $color};
  transition: opacity ease 0.3s;

  &:hover{
    opacity: ${({ $disabled }) => $disabled ? 1 : 0.7};
  }

  &::after {
    content: "i";
    font-family: ${theme.fontFamily.paragraf};
    color: ${({ $color }) => $color};
  }
`;