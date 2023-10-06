import styled from "styled-components";
import { theme } from "../../styles/theme";

interface ButtonContentProps {
  backgroundColor?: string;
  color?: string;
  width?: string;
  borderColor?: string;
}

export const ButtonContainer = styled.section<ButtonContentProps>`
  width: ${({ width }) => width || "fit-content"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ButtonContent = styled.span<ButtonContentProps>`
  position: absolute;
  border: thin solid ${({ borderColor }) => borderColor || theme.colors.black};
  padding: 1rem 4rem;
  border-radius: 0.5rem;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  color: ${({ color }) => color || theme.colors.black};
`;
