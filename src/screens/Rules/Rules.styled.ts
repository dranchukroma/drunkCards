import styled from "styled-components";
import theme from "@styles/theme";
import ScreenWrapper from "@components/ScreenWrapper";

export const Wrapper = styled(ScreenWrapper)<{ $color: string }>`
  color: ${({ $color }) => $color};
`;

export const MainTitle = styled.h2`
  font-size: ${theme.fontSize.smallHeading};
  text-align: center;
`;
export const Title = styled.h3`
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.mediumParagraf};
  margin-bottom: 5px;
  margin-top: 15px;
`;
export const Paragraf = styled.p`
  font-size: ${theme.fontSize.mediumParagraf};
`;

export const Ul = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  padding-left: 1em;
  font-size: ${theme.fontSize.mediumParagraf};
`;

export const Ol = styled.ol`
  list-style-type: decimal;
  list-style-position: inside;
  padding-left: 1em;
  font-size: ${theme.fontSize.mediumParagraf};
`;
export const Li = styled.li`
  font-size: ${theme.fontSize.mediumParagraf};
  margin-top: 5px;
`;
