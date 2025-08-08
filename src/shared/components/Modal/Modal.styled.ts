import { styled, keyframes } from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'
import theme from "@styles/theme";

const overlayShow = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const contentShow = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 200ms ease-out;
  z-index: 1000;
`;

export const Content = styled(Dialog.Content)<{$bgColor: string, $shadows: string, $color: string}>`
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $color }) => $color};
  border-radius: 10px;
  box-shadow: ${({ $shadows }) => $shadows};
  padding: 20px;
  max-width: ${theme.breakpoints.maxWidth};
  min-width: 300px;
  width: calc(80%);


  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${contentShow} 200ms ease-out;
  z-index: 1001;

  text-align: center;

  &:focus {
    outline: none;
  }
`;

export const Title = styled(Dialog.Title)`
  font-size: ${theme.fontSize.mediumHeading};
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: 10px;
`;

export const Description = styled(Dialog.Description)`
  font-size: ${theme.fontSize.mediumParagraf};
  opacity: 0.8;
  margin-bottom: 20px;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button<{ variant?: "primary" | "secondary" }>`
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ variant }) =>
    variant === "primary" ? "#000" : "transparent"};
  color: ${({ variant }) =>
    variant === "primary" ? "#fff" : "inherit"};
  border: ${({ variant }) =>
    variant === "secondary" ? "1px solid #ccc" : "none"};

  &:hover {
    opacity: 0.9;
  }
`;