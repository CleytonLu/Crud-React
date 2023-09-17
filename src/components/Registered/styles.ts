import styled from "styled-components";
import { theme } from "../../styles/theme";

export const RegisteredContainer = styled.section`
  margin-top: 2rem;
  width: 100%;
`;

export const IdentifierWrapper = styled.ul`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
`;

export const IdentifierCategory = styled.li`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${theme.colors.black};
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const IdentifierUsers = styled.li`
  font-size: 1.4rem;
  color: ${theme.colors.thirdColor};
  font-weight: 500;
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
