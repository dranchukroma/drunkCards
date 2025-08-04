import styled from "styled-components";
// import theme from "@styles/theme";
import ScreenWrapper from "@components/ScreenWrapper";
import theme from "@styles/theme";

export const SettingWrapper = styled(ScreenWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: calc(100vh - 80px);
  overflow-y: scroll;

  /* 🔵 Chrome, Safari, Edge (WebKit) */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* або rgba(...) для фону */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  /* 🟣 Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;

  > :last-child {
    margin-bottom: 50px;
  }
`;

export const ToggleGroupContainer = styled.div<{
  $disabled: boolean | undefined;
}>`
  margin-bottom: 20px;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  width: 100%;
  margin-bottom: 10px;
`;

export const ToggleLabel = styled.p<{ color: string; $shadows: string }>`
  font-size: ${theme.fontSize.mediumParagraf};
  color: ${({ color }) => color};
  text-shadow: ${({ $shadows }) => $shadows};
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
    color: ${({ color }) => color};
  }
`;
