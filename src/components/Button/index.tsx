import { ButtonContainer, ButtonContent } from "./styles";

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  color?: string;
  width?: string;
  borderColor?: string;
  click?: () => void;
}

export const Button = ({
  text,
  backgroundColor,
  click,
  color,
  width,
  borderColor,
}: ButtonProps) => {
  return (
    <ButtonContainer>
      <ButtonContent
        onClick={click}
        color={color}
        width={width}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
      >
        {text}
      </ButtonContent>
    </ButtonContainer>
  );
};
