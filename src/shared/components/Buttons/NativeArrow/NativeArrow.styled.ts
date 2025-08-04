import styled from "styled-components";

export const ArrowContainer = styled.div<{$hoverColor: string}>`
  padding: 10px;
  border-radius: 7px;
  position: absolute;
  left: 10px;
  transform: translateY(-25%);
  transition: background-color ease 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;

  svg{
    pointer-events: none; /* Щоб ховер був на контейнері */
  }

  &:hover {
    background-color: ${({$hoverColor}) => $hoverColor};
  }
`
