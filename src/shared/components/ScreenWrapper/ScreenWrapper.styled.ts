import styled from "styled-components";
import theme from "@styles/theme";

export const Wrapper = styled.div`
    max-width: ${theme.breakpoints.maxWidth};
    min-width: ${theme.breakpoints.minWidth};
    padding: 0 ${theme.breakpoints.padding};
    margin: 0 auto;
`