import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerGeneralModal = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.section`
  width: calc(100% - 50%);
  background-color: ${theme.colors.white};
  padding: 5rem;
  border-radius: 5px;
  z-index: 10;
`;

export const ModalWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-area: "1 2" "1 2" "1";
  gap: 3rem 10rem;
  justify-items: center;
  align-items: center;
  position: relative;
  z-index: 20;
`;

export const CloseModal = styled.span`
  font-size: 3rem;
  color: ${theme.colors.red["10"]};
  position: fixed;
  right: 35.5rem;
  top: 13.5rem;
`;
