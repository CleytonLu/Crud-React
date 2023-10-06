import { useState } from "react";
import { Button } from "../../components/Button";
import { ModalRegister } from "../../components/ModalRegister";
import { Registered } from "../../components/Registered";
import { theme } from "../../styles/theme";
import {
  ButtonContainer,
  ContainerGeneral,
  HomeContainer,
  RegisteredUsers,
  Title,
  TitleWrapper,
} from "./styles";

export const Home = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <>
      <ContainerGeneral>
        <ButtonContainer>
          <Button
            text="Cadastrar"
            backgroundColor={theme.colors.green["15"]}
            color={theme.colors.white}
            borderColor={theme.colors.green["10"]}
            click={() => setShowRegisterModal(true)}
          />
        </ButtonContainer>
        <HomeContainer>
          <TitleWrapper>
            <Title>Cadastros</Title>
          </TitleWrapper>
          <RegisteredUsers>
            <Registered />
          </RegisteredUsers>
        </HomeContainer>
      </ContainerGeneral>
      {showRegisterModal && <ModalRegister />}
    </>
  );
};
