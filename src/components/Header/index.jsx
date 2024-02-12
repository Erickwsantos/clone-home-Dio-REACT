import React from "react";
import { Button } from "../Button";
import logoDio from "../../assets/logo-dio.png";
import { useNavigate } from "react-router-dom";

import {
  //   Column,
  UserPicture,
  BuscarInputContainer,
  HeaderContainer,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
  Logo,
} from "./styles";

const Header = ({ autenticado }) => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
      navigate('/Login')
  }

  const handleClickRegister = () => {
    navigate('/Register')
}

  const handleClickHome = () => {
    navigate('/')
}
  return (
    <Wrapper>
      <HeaderContainer>
        <Row>
          <Logo src={logoDio} alt="Logo da Dio" onClick={handleClickHome} ></Logo>
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/121666726?s=400&u=18fd97c0d16455b8927433f49c2ce665f71ead1e&v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" onClick={handleClickSignIn}/>
              <Button title="Cadastrar" onClick={handleClickRegister}/>
            </>
          )}
        </Row>
      </HeaderContainer>
    </Wrapper>
  );
};

export { Header };
