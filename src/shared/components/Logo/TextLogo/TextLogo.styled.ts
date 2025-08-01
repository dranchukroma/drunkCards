import theme from "@styles/theme";
import styled, { keyframes } from "styled-components";

const wave = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(10%); }
`;

export const LogoContainer = styled.div<{$fillColor: string}>`
  position: relative;
  height: 35px;
  width: 100%;
  text-align: center;
  font-size: ${theme.fontSize.logo};
  font-weight: ${theme.fontWeight.bold};
  color: ${({ $fillColor }) => $fillColor};
  margin: 20px 0;
`;

const BaseLogo = styled.h1`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  margin: 0;
  pointer-events: none;
  animation: ${wave} 1s ease-in-out infinite alternate;
`;

export const TopLogo = styled(BaseLogo)`
  animation-delay: 0s;
`;

export const MiddleLogo = styled(BaseLogo)`
  animation-delay: 0.37s;
  color: red;
`;

export const BottomLogo = styled(BaseLogo)`
  animation-delay: 0.77s;
  color: blue;
`;
