import { Input } from "../Input";
import {
  CloseModal,
  ContainerGeneralModal,
  ModalContainer,
  ModalWrapper,
} from "./styles";

export const ModalRegister = () => {
  return (
    <ContainerGeneralModal>
      <ModalContainer>
        <CloseModal>X</CloseModal>
        <ModalWrapper>
          <Input labelText="Teste 1" value="valor" />
          <Input labelText="Teste 1" value="valor" />
          <Input labelText="Teste 1" value="valor" />
          <Input labelText="Teste 1" value="valor" />
          <Input labelText="Teste 1" value="valor" />
        </ModalWrapper>
      </ModalContainer>
    </ContainerGeneralModal>
  );
};
