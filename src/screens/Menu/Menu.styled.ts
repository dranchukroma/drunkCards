import styled, { keyframes } from "styled-components";
import ScreenWrapper from "@components/ScreenWrapper";
import ImageLogo from "@components/Logo/ImageLogo";
import theme from "@styles/theme";
import Clubs from "@components/Icons/Clubs";
import Diamonds from "@components/Icons/Diamonds";
import Hearts from "@components/Icons/Hearts";
import Spades from "@components/Icons/Spades";

export const MenuWrapper = styled(ScreenWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledImageLogo = styled(ImageLogo)`
    width: 50%;
    margin-bottom: 15px;
`
const FloatingSuits = keyframes`
    from{
      transform: translateY(0) scale(1.5);
    }
    to{
      transform: translateY(50%) scale(1);
    }
`

export const SuitsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 600px;
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
`

export const IconClubs = styled(Clubs)`
  animation: ${FloatingSuits} 1s ease-in-out infinite alternate;
`

export const IconHearts = styled(Hearts)`
  animation: ${FloatingSuits} 1s ease-in-out infinite alternate-reverse;
`

export const IconDiamonds = styled(Diamonds)`
  animation: ${FloatingSuits} 1s ease-in-out infinite alternate;
`

export const IconSpades = styled(Spades)`
  animation: ${FloatingSuits} 1s ease-in-out infinite alternate-reverse;
`

export const LogoLabel = styled.h2<{ $fillColor: string }>`
    color: ${({ $fillColor }) => $fillColor};
    font-size: ${theme.fontSize.smallParagraf};
    font-weight: ${theme.fontWeight.bold};
    margin-bottom: 20px;
`

export const CreatedBy = styled.p`
  position: absolute;
  bottom: 3px;
  font-size: ${theme.fontSize.smallParagraf};
`