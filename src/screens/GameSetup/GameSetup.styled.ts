import styled from "styled-components";
import theme from "@styles/theme";
import ScreenWrapper from "@components/ScreenWrapper";
import MenuButton from "@components/Buttons/MenuButton";

export const SetUpWrapper = styled(ScreenWrapper)<{ $color: string }>`
  color: ${({ $color }) => $color};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const InfoContainer = styled.div`
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5px;
  margin-top: 15px;
`;

export const Title = styled.h2`
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.fontSize.mediumParagraf};
`;

export const Description = styled.p`
  font-size: ${theme.fontSize.smallParagraf};
  margin-top: 10px;
`;

export const ToggleLabel = styled.p<{ $shadows: string }>`
  font-size: ${theme.fontSize.mediumParagraf};
  text-shadow: ${({ $shadows }) => $shadows};
  margin-bottom: 10px;
`;

export const ToggleGroupContainer = styled.div`
  margin: 0 auto;
`;

export const PlayButton = styled(MenuButton)`
  font-size: ${theme.fontSize.mediumParagraf};
  width: 300px;
`;
