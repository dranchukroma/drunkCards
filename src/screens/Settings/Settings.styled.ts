import styled from "styled-components";
// import theme from "@styles/theme";
import ScreenWrapper from "@components/ScreenWrapper";
import theme from "@styles/theme";

export const SettingWrapper = styled(ScreenWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;

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

