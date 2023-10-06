import { type } from "os";
import {
  ContainerInput,
  InputContainer,
  InputContent,
  LabelInput,
} from "./styles";
import { inputTypes } from "../../types/Input";

interface InputProps {
  labelText: string;
  value: string;
  labelColor?: string;
  borderColor?: string;
  type?: inputTypes;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  isDisabled?: boolean;
}

export const Input = ({
  labelText,
  value,
  labelColor,
  borderColor,
  type = "text",
  maxLength,
  minLength,
  pattern,
  isDisabled,
}: InputProps) => {
  return (
    <ContainerInput>
      <LabelInput labelColor={labelColor}>{labelText}</LabelInput>

      <InputContainer borderColor={borderColor} isDisabled={isDisabled}>
        <InputContent
          value={value}
          type={type}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          disabled={isDisabled}
        />
      </InputContainer>
    </ContainerInput>
  );
};
