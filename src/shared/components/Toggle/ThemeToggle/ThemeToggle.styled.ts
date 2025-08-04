import type { AppThemeType } from "@styles/theme";
import styled from "styled-components";

export const Toggle = styled.div<{ $appTheme: AppThemeType }>`
  width: 100%;
  max-width: 280px;
  background-color: ${({ $appTheme }) => $appTheme.toggleBackground};
  box-shadow: ${({ $appTheme }) => $appTheme.boxShadow};
  border-radius: 14px;
  padding: 10px;
  margin: 0 auto;
`

export const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
`

export const SelectOption = styled.div<{ $active: boolean; $bgColor: string }>`
  width: 80px;
  height: 41px;
  padding: 4px;
  background-color: ${({ $active, $bgColor }) => ($active ? $bgColor : "transparent")};
  border-radius: 12px;
  transition: background-color 0.3s ease;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BgPreview = styled.div<{ $bgColor: string }>`
  background-color: ${({ $bgColor }) => $bgColor};
  width: 100%;
  height: 100%;
  border-radius: 10px;
`