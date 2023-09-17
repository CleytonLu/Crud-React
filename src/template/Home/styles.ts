import styled from "styled-components";
import { theme } from "../../styles/theme";

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
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${theme.colors.black};
`;

export const RegisteredUsers = styled.div``;
