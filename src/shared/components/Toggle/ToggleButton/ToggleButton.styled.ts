import type { AppThemeType } from "@styles/theme";
import theme from "@styles/theme";
import styled from "styled-components";

export const Toggle = styled.div<{ $appTheme: AppThemeType } >`
    width: 290px;
    height: 40px;
    background-color: ${({ $appTheme }) => $appTheme.toggleBackground};
    box-shadow: ${({ $appTheme }) => $appTheme.boxShadow};
    border-radius: 10px;
    padding: 5px;

`

export const OptionsWrapper = styled.div`
    border-radius: 10px;
    display: flex;
    height: 100%;
    cursor: pointer;
    font-family: ${theme.fontFamily.paragraf}
`

export const ToggleOption = styled.div<{ $active: boolean, $appTheme: AppThemeType }>`
    display: grid;
    place-items: center;
    flex: 1;
    background-color: ${({ $active, $appTheme }) => $active ? $appTheme.uiSelected : ''};
    border-radius: 10px;
    transition: background-color ease 0.3s;
    color: ${({ $appTheme}) => $appTheme.fontColor}
`