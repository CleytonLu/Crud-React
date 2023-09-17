import {
  IdentifierCategory,
  IdentifierUsers,
  IdentifierWrapper,
  RegisteredContainer,
} from "./styles";

export const Registered = () => {
  return (
    <RegisteredContainer>
      <IdentifierWrapper>
        <IdentifierCategory>Nome</IdentifierCategory>
        <IdentifierCategory>email</IdentifierCategory>
        <IdentifierCategory>CPF</IdentifierCategory>
        <IdentifierCategory>Profissão</IdentifierCategory>
        <IdentifierCategory>Ações</IdentifierCategory>
      </IdentifierWrapper>
      <IdentifierWrapper>
        <IdentifierUsers>Cleyton</IdentifierUsers>
        <IdentifierUsers>cleytonlucasiurd@gmail.com</IdentifierUsers>
        <IdentifierUsers>123.456.789-10</IdentifierUsers>
        <IdentifierUsers>Software Engineer</IdentifierUsers>
        <IdentifierUsers></IdentifierUsers>
      </IdentifierWrapper>
    </RegisteredContainer>
  );
};
