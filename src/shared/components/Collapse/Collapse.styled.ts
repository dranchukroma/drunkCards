import styled from "styled-components";

export const SlideContainer = styled.div<{
  $duration: number;
  $isOpen: boolean;
  $contentHeight: number;
  $marginOpen: number;
  $marginClosed: number;
}>`
  pointer-events: ${({ $isOpen }) => ($isOpen ? "unset" : "none")};

  margin-bottom: ${({ $isOpen, $marginOpen, $marginClosed }) => ($isOpen ? $marginOpen : $marginClosed)}px;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  max-height: ${({ $isOpen, $contentHeight }) => ($isOpen ? $contentHeight + 'px' : "0px")};

  transition: max-height ${({ $duration }) => $duration}ms ease,
    opacity ${({ $duration, $isOpen }) => $isOpen ? $duration * 2 : $duration}ms ease,
    margin-bottom ${({ $duration }) => $duration}ms ease;
`;
