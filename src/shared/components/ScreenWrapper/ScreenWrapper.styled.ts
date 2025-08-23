import styled from "styled-components";
import theme from "@styles/theme";

export const Wrapper = styled.div`
  max-width: ${theme.breakpoints.maxWidth};
  min-width: ${theme.breakpoints.minWidth};
  padding: 0 ${theme.breakpoints.padding};
  margin: 0 auto;

  max-height: calc(100vh - 80px);
  overflow-y: scroll;

  -webkit-overflow-scrolling: touch;

  /* 🔵 Chrome, Safari, Edge (WebKit) */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* або rgba(...) для фону */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  /* 🟣 Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
`;
