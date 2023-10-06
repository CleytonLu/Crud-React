import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerGeneral = styled.div`
  padding: 3rem 5rem;
`;

export const HomeContainer = styled.section`
  width: calc(100% - 20%);
  margin: auto;
  margin-top: 5rem;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.gray["05"]};
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${theme.colors.white};
  text-align: center;
`;

export const RegisteredUsers = styled.div``;

export const ButtonContainer = styled.section`
  width: fit-content;
  position: relative;
  padding-top: 4rem;
  padding-left: 20rem;
`;
