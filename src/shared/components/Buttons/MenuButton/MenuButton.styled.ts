import type { AppThemeType } from "@styles/theme";
import theme from "@styles/theme";
import styled from "styled-components";

export const StyledButtonContainer = styled.button<{ $appTheme: AppThemeType }>`
    max-width: 600px;
    width: 100%;
    padding: 20px 0;
    text-align: center;
    font-size: ${theme.fontSize.bigButton};
    color: ${({ $appTheme }) => $appTheme.fontColor};
    border-radius: 10px;
    box-shadow: ${({ $appTheme }) => $appTheme.boxShadow};
    text-shadow: ${({ $appTheme }) => $appTheme.textShadow};
    border: none;
    margin-bottom: 10px;
    transition: opacity 0.3s;
    background: ${({$appTheme}) => $appTheme.uiBase};
    background: ${({$appTheme}) => $appTheme.uiGradient};

    &:hover{
        opacity: 0.7;
    }
`