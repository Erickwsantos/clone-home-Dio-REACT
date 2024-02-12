import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";

import {
  LoginContainer,
  Title,
  ColumnRegister,
  LoginText,
  RowRegister,
  SubTitleRegister,
  TitleRegister,
  Wrapper,
} from "./styles";

const Register = () => {
  const navigate = useNavigate();

  const handleClickSignOn = () => {
    navigate("/Feed");
  };

  const handleClickSignIn = () => {
    navigate("/Login");
  };

  return (
    <>
      <Header />
      <LoginContainer>
        <ColumnRegister>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </ColumnRegister>
        <ColumnRegister>
          <Wrapper>
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubTitleRegister>Crie sua conta e make the change._</SubTitleRegister>
            <form onSubmit={handleClickSignOn}>
              <Input
                placeholder="Nome Completo"
                leftIcon={<MdPerson color="#8647AD" />}
                name="Nome"
              />
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail color="#8647AD" />}
                name="email"
              />
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock color="#8647AD" />}
                name="senha"
              />
              <br />
              <Button
                variant="secundary"
                title={"Criar minha conta"}
                type="submit"
              />
            </form>
            <RowRegister>
              <SubTitleRegister>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
                <br />
                Já tenho uma conta.{" "}
                <LoginText onClick={handleClickSignIn}>Fazer Login</LoginText>
              </SubTitleRegister>
            </RowRegister>
          </Wrapper>
        </ColumnRegister>
      </LoginContainer>
    </>
  );
};

export { Register };
