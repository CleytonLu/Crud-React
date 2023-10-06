import styled from "styled-components";
import { theme } from "../../styles/theme";

interface LabelInputProps {
  labelColor?: string;
}

interface InputContentProps {
  borderColor?: string | undefined;
  isDisabled?: boolean;
}

export const ContainerInput = styled.section``;

export const LabelInput = styled.label<LabelInputProps>`
  font-size: 1.8rem;
  margin-bottom: 5rem;
  color: ${({labelColor}) => labelColor || theme.colors.gray["10"]};
`;

export const InputContainer = styled.section<InputContentProps>`
  width: 24rem;
  padding: 0.9rem;
  border: thin solid ${({ borderColor }) => borderColor || theme.colors.black};
  border-radius: 10px;
  margin-top: 0.6rem;
`;

export const InputContent = styled.input`
  font-size: 1.8rem;
  color: ${theme.colors.gray["10"]};
  border: none;
  outline: none;
`;
