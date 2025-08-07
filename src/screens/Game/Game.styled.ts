import ScreenWrapper from "@components/ScreenWrapper";
import theme from "@styles/theme";
import styled, { css } from "styled-components";

export const GameWrapper = styled(ScreenWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 80px);
`;

export const CardWrapper = styled.div<{ $zIndex: number }>`
  height: 70%;
  max-width: ${theme.breakpoints.maxWidth};
  aspect-ratio: 2 / 3;
  border-radius: 10px;
  perspective: 1800px;
  z-index: ${({ $zIndex }) => $zIndex || 1};
`;

export const CardInner = styled.div<{
  $flipped: boolean;
  $shadows: string;
  $slight: boolean;
}>`
  position: relative;
  width: 100%;
  height: 100%;

  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: ${({ $shadows }) => $shadows};

  /* transform: ${({ $flipped, $slight }) =>
    $slight
      ? "translateX(150%) rotateY(180deg)" // або 150% для повного зникнення
      : $flipped
      ? "rotateY(180deg)"
      : "none"}; */
  transform: ${({ $flipped }) =>
    $flipped ? "rotateY(180deg)" : "none"};
`;

export const CardStyles = css<{ $bgColor: string; $color: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  background-color: ${({ $bgColor }) => $bgColor};
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${theme.fontSize.mediumHeading};
    color: ${({ $color }) => $color};
  }
`;

export const CardFront = styled.div<{ $bgColor: string; $color: string }>`
  ${CardStyles};
  z-index: 1;
`;

export const CardBack = styled.div<{ $bgColor: string; $color: string }>`
  ${CardStyles};
  transform: rotateY(180deg);
`;

export const CardsLeft = styled.div<{ $color: string }>`
  p {
    font-size: ${theme.fontSize.mediumHeading};
    color: ${({ $color }) => $color};
  }
`;

export const LangWidgetContainer = styled.div`
  padding-bottom: 30px;
`;
