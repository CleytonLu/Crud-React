import { Registered } from "../../components/Registered";
import { HomeContainer, RegisteredUsers, Title, TitleWrapper } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <TitleWrapper>
        <Title>Cadastrados</Title>
      </TitleWrapper>
      <RegisteredUsers>
        <Registered />
      </RegisteredUsers>
    </HomeContainer>
  );
};
