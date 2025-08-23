import type { AppThemeType } from "@styles/theme";
import theme from "@styles/theme";
import styled from "styled-components";

export const StyledButtonContainer = styled.button<{ $appTheme: AppThemeType }>`
  max-width: 600px;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  font-size: ${theme.fontSize.bigButton};
  color: ${({ $appTheme }) => $appTheme.fontColor};
  border-radius: 10px;
  box-shadow: ${({ $appTheme }) => $appTheme.boxShadow};
  text-shadow: ${({ $appTheme }) => $appTheme.textShadow};
  border: none;
  margin-bottom: 10px;
  transition: opacity 0.3s;
  background: ${({ $appTheme }) => $appTheme.uiBase};
  background: ${({ $appTheme }) => $appTheme.uiGradient};

  /* Ховер — лише там, де він справді є (миша/трекпад) */
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 0.85;
      transform: scale(0.98);
    }
  }

  /* Дотик — даємо короткий «pressed» фідбек замість hover */
  @media (hover: none), (pointer: coarse) {
    &:active {
      opacity: 0.85;
      transform: scale(0.98);
    }
  }

  /* Не заважати клавіатурній навігації */
  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.6);
    outline-offset: 2px;
  }

  /* Опціонально: прибрати сірий хайлайт в iOS */
  -webkit-tap-highlight-color: transparent;

  /* &:hover {
    opacity: 0.7;
  } */
`;
