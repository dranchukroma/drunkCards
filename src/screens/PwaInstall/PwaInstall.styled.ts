import styled from "styled-components";
import theme, { type AppThemeType } from "../../styles/theme";
import ScreenWrapper from "@components/ScreenWrapper";
import MenuButton from "@components/Buttons/MenuButton";
import ImageLogo from "@components/Logo/ImageLogo";

export const DownloadWrapper = styled(ScreenWrapper)<{ $color: string }>`
  color: ${({ $color }) => $color};
  text-align: center;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const StyledImageLogo = styled(ImageLogo)`
  margin-bottom: 0;
  width: 150px;
`;

export const InfoContainer = styled.div`
  p {
    font-size: ${theme.fontSize.smallParagraf};
  }
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StepSection = styled.div<{ $appTheme: AppThemeType }>`
  width: 276px;
  padding: 12px;
  color: ${({ $appTheme }) => $appTheme.fontColor};
  background-color: ${({ $appTheme }) => $appTheme.uiBase};
  background-image: ${({ $appTheme }) => $appTheme.uiGradient};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StepNumber = styled.div<{ $color: string }>`
  min-width: 35px;
  min-height: 35px;
  border-radius: 50%;
  border: ${({ $color }) => $color} 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${theme.fontSize.bigParagraf};
  }
`;

export const StepLabel = styled.h3<{ $color: string }>`
  color: ${({ $color }) => $color};
  font-size: ${theme.fontSize.smallParagraf};
`;

export const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SkipButton = styled(MenuButton)`
  font-size: ${theme.fontSize.mediumParagraf};
  width: 300px;
`;
