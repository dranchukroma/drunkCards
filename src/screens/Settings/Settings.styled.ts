import styled from "styled-components";
// import theme from "@styles/theme";
import ScreenWrapper from "@components/ScreenWrapper";
import theme, { type AppThemeType } from "@styles/theme";

export const SettingWrapper = styled(ScreenWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  //max-height: 80vh; To Do
  //overflow-y: scroll To do
`;

export const Toggle = styled.div`
  margin-bottom: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  width: 100%;
  margin-bottom: 10px;
`;

export const ToggleLabel = styled.p<{ color: string; shadows: string }>`
  font-size: ${theme.fontSize.mediumParagraf};
  color: ${({ color }) => color};
  text-shadow: ${({ shadows }) => shadows};
`;

export const ToggleTooltip = styled.div<{ color: string }>`
  height: 26px;
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${({ color }) => color};

  &::after {
    content: "i";
    font-family: ${theme.fontFamily.paragraf};
  }
`;
