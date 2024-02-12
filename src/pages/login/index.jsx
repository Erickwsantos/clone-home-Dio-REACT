import { MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";

import {
  LoginContainer,
  Title,
  ColumnLogin,
  CriarText,
  EsqueciText,
  RowLogin,
  SubTitleLogin,
  TitleLogin,
  Wrapper,
} from "./styles";

const Login = () => {
  const navigate = useNavigate();

  const handleClickSignOn = () => {
    navigate("/Feed");
  };

  return (
    <>
      <Header />
      <LoginContainer>
        <ColumnLogin>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </ColumnLogin>
        <ColumnLogin>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu cadastro e make the change._</SubTitleLogin>
            <form onSubmit={handleClickSignOn}>
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
              <Button variant="secundary" title={"Entrar"} type="submit" />
            </form>
            <RowLogin>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar uma conta</CriarText>
            </RowLogin>
          </Wrapper>
        </ColumnLogin>
      </LoginContainer>
    </>
  );
};

export { Login };
