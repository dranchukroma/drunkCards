import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import type { AppThemeType } from './theme';

const GlobalStyle = createGlobalStyle<{ appTheme: AppThemeType }>`
    html, body {
        background: ${({ appTheme }) => appTheme.base || "#EEE"};
        background: ${({ appTheme }) => appTheme.gradient || "#EEE"};
    }
    

    h1 {
        font-family: ${theme.fontFamily.logo};
        font-size: ${theme.fontSize.logo};
        font-weight: ${theme.fontWeight.bold};
        user-select: none;
    }

    h2, h3, h4, h5, h6 {
        font-family: ${theme.fontFamily.heading};
        font-size: ${theme.fontSize.mediumHeading};
        font-weight: ${theme.fontWeight.regular};
        user-select: none;
    }

    p, li {
        font-family: ${theme.fontFamily.paragraf};
        font-size: ${theme.fontSize.mediumParagraf};
        font-weight: ${theme.fontWeight.regular};
        user-select: none;
    }

    button {
        font-family: ${theme.fontFamily.paragraf};
    }
`;

export default GlobalStyle