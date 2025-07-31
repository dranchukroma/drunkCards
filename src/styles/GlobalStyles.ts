import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle<{ mainBg: { base: string; gradient: string } }>`
    html, body {
        background: ${({ mainBg }) => mainBg.base};
        background: ${({ mainBg }) => mainBg.gradient};
    }

    h1 {
        font-family: ${theme.fontFamily.logo};
        font-size: ${theme.fontSize.logo};
        font-weight: ${theme.fontWeight.regular};
    }

    h2, h3, h4, h5, h6 {
        font-family: ${theme.fontFamily.heading};
        font-size: ${theme.fontSize.mediumHeading};
        font-weight: ${theme.fontWeight.regular};
    }

    p {
        font-family: ${theme.fontFamily.paragraf};
        font-size: ${theme.fontSize.mediumParagraf};
        font-weight: ${theme.fontWeight.regular};
    }
`;

export default GlobalStyle